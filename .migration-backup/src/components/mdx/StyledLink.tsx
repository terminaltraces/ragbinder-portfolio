import React from "react";
import { Link } from "@chakra-ui/react";

export default function StyledLink({ children }: { children?: React.ReactNode }) {
  return (
    <Link color="brand.oxblood" textDecoration="underline" pb="3">
      {children}
    </Link>
  );
}
