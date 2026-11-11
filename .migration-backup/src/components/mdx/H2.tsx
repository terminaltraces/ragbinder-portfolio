import { Heading } from "@chakra-ui/react";
import React from "react";

export default function H2({ children }: { children?: React.ReactNode }) {
  return (
    <Heading
      size="lg"
      fontWeight="700"
      color="brand.oxblood"
      mb="2"
      pb="4"
      pt="4"
      as="h2"
    >
      {children}
    </Heading>
  );
}
