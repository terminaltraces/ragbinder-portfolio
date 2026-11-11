import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { parse } from "yaml";
import type { Plugin } from "vite";

/** Only frontmatter enters the listing bundle, never article bodies. */
export default function postMetadata(): Plugin {
  const id = "virtual:post-metadata";
  const directory = path.resolve(import.meta.dirname, "../src/lib/data/articles");
  return {
    name: "portfolio-post-metadata",
    resolveId(source) {
      if (source === id) return `\0${id}`;
    },
    load(source) {
      if (source !== `\0${id}`) return;
      const posts = readdirSync(directory).filter((file) => file.endsWith(".mdx")).map((file) => {
        const filename = path.join(directory, file);
        this.addWatchFile(filename);
        const raw = readFileSync(filename, "utf8");
        const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
        if (!match) throw new Error(`Missing frontmatter: ${file}`);
        const data = parse(match[1]);
        if (typeof data.title !== "string" || typeof data.date !== "string" || !Number.isFinite(Date.parse(data.date))) {
          throw new Error(`Invalid title/date: ${file}`);
        }
        return { ...data, slug: file.slice(0, -4) };
      }).sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
      return `export default ${JSON.stringify(posts)};`;
    },
    handleHotUpdate(context) {
      if (context.file.startsWith(directory)) {
        const module = context.server.moduleGraph.getModuleById(`\0${id}`);
        if (module) context.server.moduleGraph.invalidateModule(module);
        context.server.ws.send({ type: "full-reload" });
      }
    },
  };
}
