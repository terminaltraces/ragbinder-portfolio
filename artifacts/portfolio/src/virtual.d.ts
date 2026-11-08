declare module "virtual:post-metadata" {
  const posts: import("./lib/posts").PostPreview[];
  export default posts;
}
