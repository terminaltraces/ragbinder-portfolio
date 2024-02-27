import React from "react";
import { Text } from "@chakra-ui/react";

export default function P({ children }: { children?: React.ReactNode }) {
  return (
    <Text pl="2" pb="3">
      {children}
    </Text>
  );
}
