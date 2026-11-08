import { PassThrough } from "node:stream";
import { renderToPipeableStream } from "react-dom/server";
import App from "./App";
export { pageMetadata as pages } from "./lib/page-metadata";

/** Wait for every lazy page/article before emitting a fully rendered static file. */
export function render(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const output = new PassThrough();
    let html = "";
    output.setEncoding("utf8");
    output.on("data", (chunk) => { html += chunk; });
    output.on("end", () => resolve(html));
    output.on("error", reject);
    const timeout = setTimeout(() => { stream.abort(); reject(new Error(`Rendering timed out: ${url}`)); }, 30000);
    output.on("close", () => clearTimeout(timeout));
    const stream = renderToPipeableStream(<App ssrPath={url} />, {
      onAllReady() { stream.pipe(output); },
      onShellError: reject,
      onError: reject,
    });
  });
}
