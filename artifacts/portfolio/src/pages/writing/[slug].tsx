import type { ReactNode } from "react";
import { useParams } from "wouter";
import { Box, Text } from "@chakra-ui/react";
import H1 from "../../components/mdx/H1";
import H2 from "../../components/mdx/H2";
import FullWidthImage from "../../components/mdx/FullWidthImage";
import CompareImage from "../../components/mdx/CompareImage";
import P from "../../components/mdx/P";
import StyledLink from "../../components/mdx/StyledLink";
import List from "../../components/mdx/List";
import Link from "../../components/SiteLink";
import { formatPostDate } from "../../components/PostCard";
import { getPost } from "../../lib/posts";
import useTitle from "../../lib/useTitle";
import NotFound from "../not-found";

const WritingPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getPost(slug);
  useTitle(`${post?.frontmatter?.title ?? "Not Found"} | Jordan Kozmary`);
  if (!post) return <NotFound />;
  const { Component } = post;
  const date: string | undefined = post.frontmatter?.date;
  const Heading1 = ({ children }: { children?: ReactNode }) =>
    (
      <Box as="header" mb="6">
        <H1>{children}</H1>
        {date && (
          <Text color="brand.muted" mt="-4">
            Published <time dateTime={date}>{formatPostDate(date)}</time>
          </Text>
        )}
      </Box>
    );
  const mdxComponents = { h1: Heading1, h2: H2, p: P, a: StyledLink, FullWidthImage, ul: List, CompareImage };
  return (
    <>
      <Text as="nav" aria-label="Breadcrumb" mb="6" fontSize="sm">
        <Link href="/writing" color="brand.rust" textDecoration="underline" textUnderlineOffset="3px">
          Back to all writing
        </Link>
      </Text>
      <Box as="article">
        <Component components={mdxComponents} />
      </Box>
    </>
  );
};

export default WritingPage;
