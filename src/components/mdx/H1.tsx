import { Heading } from "@chakra-ui/react";
import React from "react";

export default function H1({ children }: { children?: React.ReactNode }) {
  return (
    <Heading
      fontFamily="ingra"
      fontWeight="700"
      fontStyle="normal"
      color="#430707"
      mb="4"
      pb="6"
      as="h1"
    >
      {children}
    </Heading>
  );
}
