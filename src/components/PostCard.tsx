import NextLink from "next/link";
import { Box, Link, Text } from "@chakra-ui/react";
import { PostPreview } from "../lib/posts";

export default function PostCard({ title, date, slug }: PostPreview) {
  const postDate = new Date(Date.parse(date as string)).toDateString();

  return (
    <Box pb="6">
      <Link
        fontWeight="500"
        pb="2"
        as={NextLink}
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
