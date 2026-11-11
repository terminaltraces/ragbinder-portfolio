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
      // Warm parchment — page surface (not pure white).
      paper: "#FCF8F2",
      // Body ink — warm near-black, ~16:1 on paper.
      ink: "#2A1A17",
      // Muted ink for metadata — ~7:1 on paper.
      muted: "#5E4B45",
      // Accessible link/focus red — ~8:1 on paper.
      rust: "#8A2B1F",
    },
  },
  components: {
    Link: {
      baseStyle: {
        transition: "color 150ms ease, background-color 150ms ease, text-decoration-color 150ms ease",
        _focusVisible: { boxShadow: "none", outline: "3px solid", outlineColor: "brand.rust", outlineOffset: "3px", borderRadius: "sm" },
      },
    },
    Heading: { baseStyle: { color: "brand.oxblood", letterSpacing: "-0.01em" } },
  },
  styles: {
    global: {
      body: {
        bg: "brand.paper",
        color: "brand.ink",
      },
    },
  },
});

export default theme;
