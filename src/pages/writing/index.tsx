import { NextPage } from "next";
import NextLink from "next/link";
import { Heading, Text, Link, Box } from "@chakra-ui/react";
import { InferGetStaticPropsType } from "next";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Head from "next/head";

const articlesDirectory = "src/lib/data/articles";

export async function getStaticProps() {
  const postFilePaths = fs
    .readdirSync(articlesDirectory)
    .filter((postFilePath) => {
      return path.extname(postFilePath).toLowerCase() === ".mdx";
    });

  const postPreviews = postFilePaths
    .map((postFilePath) => {
      const postFile = fs.readFileSync(
        path.join(articlesDirectory, postFilePath),
        "utf8"
      );
      const { data } = matter(postFile);
      return {
        slug: postFilePath.replace(".mdx", ""),
        title: data.title as string,
        date: data.date as string,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return {
    props: {
      postPreviews: postPreviews,
    },
  };
}

interface PostProps {
  slug: string;
  title: string;
  date: string;
}

const PostComponent = ({ slug, title, date }: PostProps) => {
  const postDate = new Date(Date.parse(date)).toDateString();

  return (
    <Box pb="6">
      <Link
        fontFamily="ingra"
        fontWeight="500"
        fontStyle="normal"
        pb="2"
        as={NextLink}
        fontSize={"3xl"}
        href={`/writing/${slug}`}
      >
        {title}
      </Link>
      <Text
        fontFamily="ingra"
        fontWeight="500"
        fontSize={"xl"}
        fontStyle="normal"
      >
        {postDate}
      </Text>
    </Box>
  );
};

const WritingsPage: NextPage = ({
  postPreviews,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Writing | Jordan Kozmary</title>
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
      <div>
        {postPreviews.map((postData) => (
          <PostComponent key={postData.slug} {...postData} />
        ))}
      </div>
    </>
  );
};

export default WritingsPage;
