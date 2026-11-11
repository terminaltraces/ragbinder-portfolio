import React from "react";
import { Text } from "@chakra-ui/react";

export default function P({ children }: { children?: React.ReactNode }) {
  return <Text pb="4">{children}</Text>;
}
