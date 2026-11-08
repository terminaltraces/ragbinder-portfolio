import { NextPage, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { Heading } from "@chakra-ui/react";
import PostCard from "../../components/PostCard";
import { getPostPreviews } from "../../lib/posts";

export function getStaticProps() {
  return {
    props: {
      postPreviews: getPostPreviews(),
    },
  };
}

const WritingsPage: NextPage = ({
  postPreviews,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Writing | Jordan Kozmary</title>
      </Head>
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
