import { NextPage } from "next";
import NextLink from "next/link";
import { Heading, Text, Link } from "@chakra-ui/react";
import { InferGetStaticPropsType } from "next";
import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import Head from "next/head";

export async function getStaticProps() {
  const articlesDirectory = "src/lib/data/articles";
  // get all MDX files
  const postFilePaths = fs
    .readdirSync(articlesDirectory)
    .filter((postFilePath) => {
      return path.extname(postFilePath).toLowerCase() === ".mdx";
    });

  const postPreviews = [];

  // read the frontmatter for each file
  for (const postFilePath of postFilePaths) {
    const postFile = fs.readFileSync(
      `${articlesDirectory}/${postFilePath}`,
      "utf8"
    );

    // serialize the MDX content to a React-compatible format
    // and parse the frontmatter
    const serializedPost = await serialize(postFile, {
      parseFrontmatter: true,
    });

    postPreviews.push({
      ...serializedPost.frontmatter,
      // add the slug to the frontmatter info
      slug: postFilePath.replace(".mdx", ""),
    });
  }

  return {
    props: {
      postPreviews: postPreviews,
    },
  };
}

const PostComponent = (post) => {
  const postDate = new Date(Date.parse(post.date)).toDateString();

  return (
    <div key={post.slug}>
      <Link
        fontFamily="ingra"
        fontWeight="500"
        fontStyle="normal"
        pb="2"
        as={NextLink}
        fontSize={"3xl"}
        href={`/writing/${post.slug}`}
      >
        {post.title}
      </Link>
      <Text
        fontFamily="ingra"
        fontWeight="500"
        fontSize={"xl"}
        fontStyle="normal"
      >
        {postDate}
      </Text>
    </div>
  );
};

const WritingsPage: NextPage = ({
  postPreviews,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Writing | Steven Jordan Kozmary</title>
      </Head>
      <Heading
        fontFamily="ingra"
        fontWeight="700"
        fontStyle="normal"
        color="#430707"
        mb="4"
        pb="6"
        as="h1"
      >
        Recent Writing
      </Heading>
      <div>{postPreviews.map((postData) => PostComponent(postData))}</div>
    </>
  );
};

export default WritingsPage;
