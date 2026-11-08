import { lazy, type ComponentType } from "react";
import previews from "virtual:post-metadata";

export interface PostPreview {
  title: string;
  date: string;
  slug: string;
}

type MDXModule = { default: ComponentType<{ components?: Record<string, unknown> }> };
const loaders = import.meta.glob<MDXModule>("./data/articles/*.mdx");
const posts = previews.map((frontmatter) => ({
  slug: frontmatter.slug,
  frontmatter,
  Component: lazy(loaders[`./data/articles/${frontmatter.slug}.mdx`]),
}));

export const getAllPostSlugs = () => previews.map((post) => post.slug);
export const getPostPreviews = () => previews;
export const getPost = (slug: string) => posts.find((post) => post.slug === slug);
