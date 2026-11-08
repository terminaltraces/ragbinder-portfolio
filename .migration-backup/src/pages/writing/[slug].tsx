import { InferGetStaticPropsType, NextPage } from "next";
import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";
import H1 from "../../components/mdx/H1";
import H2 from "../../components/mdx/H2";
import FullWidthImage from "../../components/mdx/FullWidthImage";
import CompareImage from "../../components/mdx/CompareImage";
import P from "../../components/mdx/P";
import StyledLink from "../../components/mdx/StyledLink";
import List from "../../components/mdx/List";
import { getAllPostSlugs, getPostSource } from "../../lib/posts";

const mdxComponents = {
  h1: H1,
  h2: H2,
  p: P,
  a: StyledLink,
  FullWidthImage,
  ul: List,
  CompareImage,
};

const WritingPage: NextPage = ({
  source,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Head>
        <title>{source.frontmatter?.title} | Jordan Kozmary</title>
      </Head>
      <MDXRemote {...source} components={mdxComponents} />
    </div>
  );
};

export function getStaticPaths() {
  return {
    paths: getAllPostSlugs().map((slug) => ({ params: { slug } })),
    fallback: false as const,
  };
}

export async function getStaticProps({
  params,
}: {
  params: { slug: string };
}) {
  return {
    props: {
      source: await getPostSource(params.slug),
    },
  };
}

export default WritingPage;
