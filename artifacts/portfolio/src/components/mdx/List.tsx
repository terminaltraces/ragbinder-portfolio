import React from "react";
import { Box } from "@chakra-ui/react";

export default function List({ children }: { children?: React.ReactNode }) {
  return (
    <Box as="ul" pl="6" pb="4" sx={{ "& > li": { mb: 1 }, "& > li::marker": { color: "brand.rust" } }}>
      {children}
    </Box>
  );
}
