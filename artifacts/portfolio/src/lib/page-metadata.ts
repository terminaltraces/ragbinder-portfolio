import posts from "virtual:post-metadata";

/** Shared by the static exporter and client navigation, avoiding stale tags. */
export const pageMetadata = [
  { path: "/", title: "Home", description: "Jordan Kozmary’s game development portfolio: industry experience, personal projects, and technical writing." },
  { path: "/experience", title: "Experience", description: "Jordan Kozmary’s industry experience on Call of Duty: Warzone and The Lamplighters’ League." },
  { path: "/projects", title: "Projects", description: "Personal game development projects by Jordan Kozmary." },
  { path: "/writing", title: "Writing", description: "Articles about Unreal Engine, game systems, inventories, and game development by Jordan Kozmary." },
  ...posts.map((post) => ({
    path: `/writing/${post.slug}`, title: post.title,
    description: `${post.title} — game development notes by Jordan Kozmary.`,
  })),
  { path: "/404", title: "404", description: "This page could not be found." },
];
