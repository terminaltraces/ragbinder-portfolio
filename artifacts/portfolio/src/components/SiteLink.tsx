import { forwardRef } from "react";
import { Link, type LinkProps } from "@chakra-ui/react";
import { Link as RouterLink } from "wouter";
import { assetUrl } from "../lib/urls";

/** Shared navigation without document reloads; downloads remain plain links. */
const SiteLink = forwardRef<HTMLAnchorElement, LinkProps>(function SiteLink({ href = "", ...props }, ref) {
  if (href.startsWith("/") && !href.startsWith("//") && !/\.[a-z0-9]+(?:[?#]|$)/i.test(href)) {
    return <Link as={RouterLink} href={href} ref={ref} {...props} />;
  }
  return <Link href={assetUrl(href)} ref={ref} {...props} />;
});
export default SiteLink;
