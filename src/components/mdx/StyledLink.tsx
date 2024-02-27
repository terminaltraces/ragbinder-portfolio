import React from "react";
import { Link } from "@chakra-ui/react";

export default function P({ children }: { children?: React.ReactNode }) {
  return (
    <Link color="#430707" textDecoration={"underline"} pb="3">
      {children}
    </Link>
  );
}
