import { extendTheme } from "@chakra-ui/react";

/**
 * Site-wide design tokens. Previously these values were copy-pasted as
 * inline hex strings across pages and components; centralizing them here
 * keeps the palette consistent and makes design changes one-line diffs.
 */
const theme = extendTheme({
  fonts: {
    heading: "ingra, sans-serif",
    body: "ingra, sans-serif",
    // Dutch Mediaeval Pro (Typekit) — display serif used for the wordmark/nav.
    display: "dutch-mediaeval-pro, serif",
    mono: "ui-monospace, SFMono-Regular, Consolas, monospace",
    code: "source-code-pro, Menlo, Consolas, monospace",
  },
  colors: {
    brand: {
      // Primary maroon — sidebar, headings, links.
      oxblood: "#430707",
      // Secondary maroon — sidebar background.
      merlot: "#451919",
      // Warm cream — hover states.
      cream: "#D8CBB8",
      // (reserved) warm light tan — 2.9:1 on white, decorative use only.
      sand: "#9e968a",
    },
  },
  styles: {
    global: {
      body: {
        bg: "white",
        color: "black",
      },
    },
  },
});

export default theme;
