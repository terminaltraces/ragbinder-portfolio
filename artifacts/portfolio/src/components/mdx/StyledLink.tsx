import React from "react";
import type { LinkProps } from "@chakra-ui/react";
import Link from "../SiteLink";

export default function StyledLink({ children, ...props }: LinkProps) {
  return (
    <Link color="brand.oxblood" textDecoration="underline" pb="3" {...props}>
      {children}
    </Link>
  );
}
