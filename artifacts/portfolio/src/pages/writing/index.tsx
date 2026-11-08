import useTitle from "../../lib/useTitle";
import { Heading } from "@chakra-ui/react";
import PostCard from "../../components/PostCard";
import { getPostPreviews } from "../../lib/posts";

const WritingsPage = () => {
  useTitle("Writing | Jordan Kozmary");
  const postPreviews = getPostPreviews();
  return (
    <>
      <Heading
        fontWeight="700"
        color="brand.oxblood"
        mb="4"
        pb="6"
        as="h1"
      >
        Recent Writing
      </Heading>
      <div>
        {postPreviews.map((post) => (
          <PostCard key={post.slug} {...post} />
        ))}
      </div>
    </>
  );
};

export default WritingsPage;
