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
      // Warm light tan — used by FullWidthImage/CompareImage chrome.
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
