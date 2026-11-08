import { useParams } from "wouter";
import H1 from "../../components/mdx/H1";
import H2 from "../../components/mdx/H2";
import FullWidthImage from "../../components/mdx/FullWidthImage";
import CompareImage from "../../components/mdx/CompareImage";
import P from "../../components/mdx/P";
import StyledLink from "../../components/mdx/StyledLink";
import List from "../../components/mdx/List";
import { getPost } from "../../lib/posts";
import useTitle from "../../lib/useTitle";
import NotFound from "../not-found";

const mdxComponents = {
  h1: H1,
  h2: H2,
  p: P,
  a: StyledLink,
  FullWidthImage,
  ul: List,
  CompareImage,
};

const WritingPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getPost(slug);
  useTitle(`${post?.frontmatter?.title ?? "Not Found"} | Jordan Kozmary`);
  if (!post) return <NotFound />;
  const { Component } = post;
  return (
    <div>
      <Component components={mdxComponents} />
    </div>
  );
};

export default WritingPage;
