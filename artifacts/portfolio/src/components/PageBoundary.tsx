import { Component, type ReactNode } from "react";
import { Box, Button, Text } from "@chakra-ui/react";

/** A failed chunk request must not leave the whole site blank. */
export default class PageBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    if (this.state.failed) return (
      <Box role="alert">
        <Text mb="4">This page couldn’t load. Please check your connection and try again.</Text>
        <Button onClick={() => window.location.reload()}>Reload page</Button>
      </Box>
    );
    return this.props.children;
  }
}
