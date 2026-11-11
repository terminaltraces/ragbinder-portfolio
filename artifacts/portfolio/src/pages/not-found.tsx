import { Heading, Text } from "@chakra-ui/react";
import Link from "../components/SiteLink";
import useTitle from "../lib/useTitle";

export default function NotFound() {
  useTitle("404 | Jordan Kozmary");
  return (
    <>
      <Heading fontWeight="700" color="brand.oxblood" mb="4" pb="6" as="h1">
        404
      </Heading>
      <Text>This page could not be found. <Link href="/" color="brand.rust" textDecoration="underline">Return home</Link>.</Text>
    </>
  );
}
