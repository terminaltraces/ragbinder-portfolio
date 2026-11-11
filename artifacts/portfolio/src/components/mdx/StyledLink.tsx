import React from "react";
import type { LinkProps } from "@chakra-ui/react";
import Link from "../SiteLink";

export default function StyledLink({ children, ...props }: LinkProps) {
  return (
    <Link color="brand.rust" textDecoration="underline" textUnderlineOffset="3px" _hover={{ color: "brand.oxblood" }} {...props}>
      {children}
    </Link>
  );
}
