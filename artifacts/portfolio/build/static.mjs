import { build } from "vite";
import { mkdir, readFile, writeFile, readdir, rm, stat } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL, fileURLToPath } from "node:url";
import sharp from "sharp";

process.env.NODE_ENV = "production";
const root = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const configFile = path.join(root, "vite.config.ts");
const out = path.join(root, "dist/public");
const serverOut = path.join(root, "dist/prerender");
const base = `/${(process.env.BASE_PATH ?? "/").replace(/^\/+|\/+$/g, "")}`.replace(/\/?$/, "/");
await build({ configFile });
await build({
  configFile,
  build: { ssr: path.join(root, "src/entry-server.tsx"), outDir: serverOut, emptyOutDir: true },
});
const { pages, render } = await import(pathToFileURL(path.join(serverOut, "entry-server.js")));
const template = await readFile(path.join(out, "index.html"), "utf8");
const escape = (value) => value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
for (const page of pages) {
  const title = escape(`${page.title} | Jordan Kozmary`);
  const description = escape(page.description);
  const body = await render(`${base.replace(/\/$/, "")}${page.path}`);
  const html = template
    .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
    .replace("</head>", `<meta name="description" content="${description}" /><meta property="og:title" content="${title}" /><meta property="og:description" content="${description}" /><meta property="og:type" content="${page.path.startsWith("/writing/") ? "article" : "website"}" /></head>`)
    .replace('<div id="root"></div>', () => `<div id="root">${body}</div>`);
  const target = page.path === "/404" ? path.join(out, "404.html") : path.join(out, page.path, "index.html");
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, html);
}
await writeFile(path.join(out, ".nojekyll"), "");

// Use lossless WebP: preserve image detail, especially text in editor screenshots.
let before = 0;
let after = 0;
const imageDir = path.join(out, "images");
for (const name of await readdir(imageDir)) {
  if (!/\.png$/i.test(name)) continue;
  const source = path.join(imageDir, name);
  const webp = source.replace(/\.png$/i, ".webp");
  await sharp(source).webp({ lossless: true, effort: 6 }).toFile(webp);
  before += (await stat(source)).size;
  after += (await stat(webp)).size;
}
await rm(serverOut, { recursive: true });
console.info(`Generated ${pages.length} static pages. Images: ${(before / 1e6).toFixed(2)} MB original → ${(after / 1e6).toFixed(2)} MB lossless WebP.`);
