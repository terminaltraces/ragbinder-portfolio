import { Heading } from "@chakra-ui/react";
import React from "react";

export default function H1({ children }: { children?: React.ReactNode }) {
  return (
    <Heading
      fontFamily="ingra"
      size="lg"
      fontWeight="700"
      fontStyle="normal"
      color="#430707"
      mb="2"
      pb="4"
      as="h2"
    >
      {children}
    </Heading>
  );
}
