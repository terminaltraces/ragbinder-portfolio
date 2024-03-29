import { InferGetStaticPropsType } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";
import React from "react";
import { NextPage } from "next";
import H1 from "../../components/mdx/H1";
import H2 from "../../components/mdx/H2";
import FullWidthImage from "../../components/mdx/FullWidthImage";
import CompareImage from "../../components/mdx/CompareImage";
import P from "../../components/mdx/P";
import StyledLink from "../../components/mdx/StyledLink";
import List from "../../components/mdx/List";
import path from "path";
import fs from "fs"; // Import the 'fs' module from the Node.js standard library

const articlesDirectory = "src/lib/data/articles";

const WritingPage: NextPage = ({
  source,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Head>
        <title>{source.frontmatter.title as string} | Jordan Kozmary</title>
      </Head>
      <MDXRemote
        {...source}
        // specifying the custom MDX components
        components={{
          h1: H1,
          h2: H2,
          p: P,
          a: StyledLink,
          FullWidthImage,
          ul: List,
          CompareImage,
        }}
      />
    </div>
  );
};

export async function getStaticPaths() {
  const articlesDirectory = "src/lib/data/articles";
  // get all MDX files
  const fileNames = fs.readdirSync(articlesDirectory).filter((postFilePath) => {
    return path.extname(postFilePath).toLowerCase() === ".mdx";
  });
  const filePaths = fileNames.map((file) => {
    return {
      params: {
        slug: file.replace(".mdx", ""),
      },
    };
  });
  console.log(filePaths);
  return { paths: filePaths, fallback: false };
}

export async function getStaticProps({ params }) {
  const postFile = fs.readFileSync(`${articlesDirectory}/${params.slug}.mdx`);

  // read the MDX serialized content along with the frontmatter
  // from the .mdx blog post file
  const mdxSource = await serialize(postFile, { parseFrontmatter: true });
  return {
    props: {
      source: mdxSource,
    },
  };
}
export default WritingPage;
