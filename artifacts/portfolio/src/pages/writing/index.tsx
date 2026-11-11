import useTitle from "../../lib/useTitle";
import { Box, Heading, Text } from "@chakra-ui/react";
import PostCard from "../../components/PostCard";
import { getPostPreviews } from "../../lib/posts";

const WritingsPage = () => {
  useTitle("Writing | Jordan Kozmary");
  const postPreviews = getPostPreviews();
  return (
    <>
      <Heading fontWeight="700" mb="2" as="h1">Recent Writing</Heading>
      <Text color="brand.muted" mb="4">{postPreviews.length} posts</Text>
      <Box as="ul" listStyleType="none" m="0" p="0">
        {postPreviews.map((post) => (
          <li key={post.slug}><PostCard {...post} /></li>
        ))}
      </Box>
    </>
  );
};

export default WritingsPage;
