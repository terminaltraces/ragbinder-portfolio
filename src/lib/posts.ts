import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";

const articlesDirectory = path.join(process.cwd(), "src/lib/data/articles");

export interface PostFrontmatter {
  title: string;
  date: string;
  [key: string]: unknown;
}

export interface PostPreview extends PostFrontmatter {
  slug: string;
}

const listPostFiles = () =>
  fs
    .readdirSync(articlesDirectory)
    .filter((file) => path.extname(file).toLowerCase() === ".mdx");

/** Slugs of every post, e.g. for getStaticPaths. */
export function getAllPostSlugs(): string[] {
  return listPostFiles().map((file) => file.replace(/\.mdx$/, ""));
}

/**
 * Frontmatter + slug for every post, newest first. Uses gray-matter only —
 * no MDX compilation — so the listing page doesn't pay for work only the
 * article pages need.
 */
export function getPostPreviews(): PostPreview[] {
  return listPostFiles()
    .map((file) => {
      const raw = fs.readFileSync(path.join(articlesDirectory, file), "utf8");
      return {
        ...(matter(raw).data as PostFrontmatter),
        slug: file.replace(/\.mdx$/, ""),
      };
    })
    .sort(
      (a, b) =>
        new Date(b.date as string).getTime() -
        new Date(a.date as string).getTime()
    );
}

/** Fully serialized MDX for a single post page. */
export function getPostSource(
  slug: string
): Promise<MDXRemoteSerializeResult<Record<string, unknown>, PostFrontmatter>> {
  const raw = fs.readFileSync(path.join(articlesDirectory, `${slug}.mdx`));
  return serialize(raw, { parseFrontmatter: true });
}
