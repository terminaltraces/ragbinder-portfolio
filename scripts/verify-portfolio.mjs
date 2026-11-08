import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import test from "node:test";

const root = fileURLToPath(new URL("../", import.meta.url));
const app = path.join(root, "artifacts/portfolio");
const articles = path.join(app, "src/lib/data/articles");
const slugs = (await readdir(articles))
  .filter((name) => name.endsWith(".mdx"))
  .map((name) => name.slice(0, -4));
const base = "http://localhost:80";

test("all original articles have metadata and compile through Vite", async () => {
  assert.equal(slugs.length, 9);
  for (const slug of slugs) {
    const source = await readFile(path.join(articles, `${slug}.mdx`), "utf8");
    assert.match(source, /^---\s*\n/);
    assert.match(source, /\ntitle:/);
    assert.match(source, /\ndate:/);
    const response = await fetch(`${base}/src/lib/data/articles/${slug}.mdx?import`);
    assert.equal(response.status, 200, slug);
    const compiled = await response.text();
    assert.match(compiled, /export.*default|as default/, slug);
    assert.doesNotMatch(compiled, /Internal Server Error/, slug);
  }
});

test("main pages and every article support direct navigation", async () => {
  for (const route of ["/", "/experience", "/projects", "/writing", ...slugs.map((s) => `/writing/${s}`)]) {
    const response = await fetch(`${base}${route}`);
    assert.equal(response.status, 200, route);
    assert.match(await response.text(), /id="root"/, route);
  }
});

test("all portfolio assets are served as their original bytes", async () => {
  async function walk(dir, prefix = "") {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      const relative = `${prefix}/${entry.name}`;
      if (entry.isDirectory()) {
        await walk(path.join(dir, entry.name), relative);
      } else if (/\.(png|jpe?g|ico|pdf)$/.test(entry.name)) {
        const expected = await readFile(path.join(dir, entry.name));
        const response = await fetch(`${base}${relative}`);
        assert.equal(response.status, 200, relative);
        assert.deepEqual(Buffer.from(await response.arrayBuffer()), expected, relative);
      }
    }
  }
  await walk(path.join(app, "public"));
});

test("runtime no longer depends on Next.js", async () => {
  const pkg = JSON.parse(await readFile(path.join(app, "package.json"), "utf8"));
  assert.equal(pkg.dependencies?.next, undefined);
  assert.equal(pkg.devDependencies?.next, undefined);
  assert.equal(pkg.dependencies?.["next-mdx-remote"], undefined);
  const html = await readFile(path.join(app, "index.html"), "utf8");
  assert.match(html, /use\.typekit\.net\/niz4gnx\.css/);
});
