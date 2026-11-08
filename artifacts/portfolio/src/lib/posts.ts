import type { ComponentType } from "react";

export interface PostFrontmatter {
  title: string;
  date: string;
  [key: string]: unknown;
}

export interface PostPreview extends PostFrontmatter {
  slug: string;
}

type MDXModule = {
  default: ComponentType<{ components?: Record<string, unknown> }>;
  frontmatter: PostFrontmatter;
};

const modules = import.meta.glob<MDXModule>("./data/articles/*.mdx", {
  eager: true,
});

const posts = Object.entries(modules).map(([file, mod]) => ({
  slug: file.replace(/^.*\/(.*)\.mdx$/, "$1"),
  frontmatter: mod.frontmatter,
  Component: mod.default,
}));

export function getAllPostSlugs(): string[] {
  return posts.map((p) => p.slug);
}

export function getPostPreviews(): PostPreview[] {
  return posts
    .map((p) => ({ ...p.frontmatter, slug: p.slug }))
    .sort(
      (a, b) =>
        new Date(b.date as string).getTime() -
        new Date(a.date as string).getTime()
    );
}

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
