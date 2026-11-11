import assert from "node:assert/strict";
import { readdir, readFile, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const root = path.resolve(fileURLToPath(new URL("../artifacts/portfolio/", import.meta.url)));
const out = path.join(root, "dist/public");
const base = `/${(process.env.BASE_PATH ?? "/").replace(/^\/+|\/+$/g, "")}`.replace(/\/?$/, "/");
const slugs = (await readdir(path.join(root, "src/lib/data/articles")))
  .filter((name) => name.endsWith(".mdx")).map((name) => name.slice(0, -4));
const routes = ["/", "/experience", "/projects", "/writing", ...slugs.map((slug) => `/writing/${slug}`)];

test("every known route has rendered content, metadata, and working local resources", async () => {
  for (const route of routes) {
    const html = await readFile(path.join(out, route, "index.html"), "utf8");
    assert.match(html, /<h1\b[^>]*>[\s\S]+?<\/h1>/, route);
    assert.match(html, /<meta name="description" content="[^"]+"/, route);
    assert.match(html, /<meta property="og:title"/, route);
    assert.doesNotMatch(html, /Loading…|data-msg=|BAILOUT_TO_CLIENT_SIDE_RENDERING/, route);
    assert.match(html, /<title>.+ \| Jordan Kozmary<\/title>/, route);
    for (const [, url] of html.matchAll(/(?:src|href)="(\/[^"]*)"/g)) {
      assert.ok(url.startsWith(base), `${route}: resource escapes base path: ${url}`);
      const pathname = decodeURIComponent(url.slice(base.length).split(/[?#]/)[0]);
      if (!pathname) continue;
      if (/\.[a-z0-9]+$/i.test(pathname)) await access(path.join(out, pathname));
      else await access(path.join(out, pathname, "index.html"));
    }
    if (route.startsWith("/writing/")) assert.match(html, /<p\b[^>]*>[\s\S]+?<\/p>/, route);
  }
});

test("Pages includes a real 404, resume, custom domain, and no Jekyll processing", async () => {
  assert.match(await readFile(path.join(out, "404.html"), "utf8"), /This page could not be found/);
  assert.equal((await readFile(path.join(out, "sjk-resume.pdf"))).subarray(0, 5).toString(), "%PDF-");
  assert.equal(await readFile(path.join(out, "CNAME"), "utf8"), await readFile(path.join(root, "public/CNAME"), "utf8"));
  await access(path.join(out, ".nojekyll"));
});

test("static pages retain accessible landmarks, headings, images, and publication dates", async () => {
  for (const route of [...routes, "/404"]) {
    const html = await readFile(route === "/404" ? path.join(out, "404.html") : path.join(out, route, "index.html"), "utf8");
    assert.equal((html.match(/<h1\b/g) ?? []).length, 1, `${route}: one page heading`);
    assert.equal((html.match(/<main\b/g) ?? []).length, 1, `${route}: one main landmark`);
    assert.match(html, /<main\b[^>]*id="main-content"[^>]*tabindex="-1"/, `${route}: focusable skip target`);
    assert.match(html, /href="#main-content"/, `${route}: skip link`);
    for (const image of html.matchAll(/<img\b[^>]*>/g)) {
      assert.match(image[0], /\balt="[^"]*"/, `${route}: image alternative`);
    }
    if (route.startsWith("/writing/")) {
      assert.match(html, /<article\b/, `${route}: article landmark`);
      assert.match(html, /<time\b[^>]*dateTime="\d{4}-\d{2}-\d{2}"/i, `${route}: machine-readable date`);
    }
  }
});

test("initial JavaScript does not contain every article body", async () => {
  const html = await readFile(path.join(out, "index.html"), "utf8");
  const script = html.match(/<script[^>]*src="([^"]+)"/)?.[1];
  assert.ok(script);
  const js = await readFile(path.join(out, script.slice(base.length)), "utf8");
  assert.doesNotMatch(js, /The terrain in the game world is represented by contiguous hexagonal tiles/);
  const chunks = await readdir(path.join(out, "assets"));
  for (const slug of slugs) assert.ok(chunks.some((file) => file.startsWith(`${slug}-`) && file.endsWith(".js")), slug);
});

test("lossless optimized images are smaller overall", async () => {
  const { stat } = await import("node:fs/promises");
  let original = 0;
  let optimized = 0;
  for (const file of await readdir(path.join(out, "images"))) {
    if (!/\.png$/i.test(file)) continue;
    original += (await stat(path.join(out, "images", file))).size;
    optimized += (await stat(path.join(out, "images", file.replace(/\.png$/i, ".webp")))).size;
  }
  assert.ok(optimized < original, `${optimized} optimized >= ${original} original`);
});
