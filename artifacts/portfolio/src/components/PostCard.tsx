import { Link as RouterLink } from "wouter";
import { Box, Heading, Link, Text } from "@chakra-ui/react";
import { PostPreview } from "../lib/posts";

export const formatPostDate = (date: string) =>
  // UTC so generated HTML and hydration agree in every visitor's timezone.
  new Date(date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });

export default function PostCard({ title, date, slug }: PostPreview) {
  return (
    <Box as="article" py="5" borderBottom="1px solid" borderColor="brand.cream">
      <Heading as="h2" fontSize={{ base: "xl", md: "2xl" }} lineHeight="1.3" fontWeight="600" mb="1">
        <Link as={RouterLink} href={`/writing/${slug}`} color="brand.oxblood" textDecorationColor="brand.cream" textUnderlineOffset="4px" _hover={{ textDecoration: "underline", textDecorationColor: "brand.rust" }}>
          {title}
        </Link>
      </Heading>
      <Text color="brand.muted" fontSize="md">
        <time dateTime={date}>{formatPostDate(date)}</time>
      </Text>
    </Box>
  );
}
