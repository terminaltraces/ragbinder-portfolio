import { Heading } from "@chakra-ui/react";
import React from "react";

export default function H1({ children }: { children?: React.ReactNode }) {
  return (
    <Heading
      fontWeight="700"
      color="brand.oxblood"
      mb="4"
      pb="6"
      as="h1"
    >
      {children}
    </Heading>
  );
}
