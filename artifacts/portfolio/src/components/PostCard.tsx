import { Link as RouterLink } from "wouter";
import { Box, Link, Text } from "@chakra-ui/react";
import { PostPreview } from "../lib/posts";

export default function PostCard({ title, date, slug }: PostPreview) {
  // Use UTC so generated HTML and hydration agree in every visitor's timezone.
  const postDate = new Date(date).toLocaleDateString("en-US", {
    weekday: "short", month: "short", day: "2-digit", year: "numeric", timeZone: "UTC",
  }).replace(/,/g, "");

  return (
    <Box pb="6">
      <Link
        fontWeight="500"
        pb="2"
        as={RouterLink}
        fontSize="3xl"
        href={`/writing/${slug}`}
      >
        {title}
      </Link>
      <Text fontWeight="500" fontSize="xl">
        {postDate}
      </Text>
    </Box>
  );
}
