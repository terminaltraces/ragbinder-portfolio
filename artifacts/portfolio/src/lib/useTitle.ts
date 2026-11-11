import { useEffect } from "react";
import { pageMetadata } from "./page-metadata";

export default function useTitle(title: string) {
  useEffect(() => {
    document.title = title;
    const metadata = pageMetadata.find((page) => `${page.title} | Jordan Kozmary` === title);
    if (!metadata) return;
    const tags = [
      ["name", "description", metadata.description],
      ["property", "og:title", title],
      ["property", "og:description", metadata.description],
      ["property", "og:type", metadata.path.startsWith("/writing/") ? "article" : "website"],
    ];
    for (const [attribute, key, content] of tags) {
      let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attribute, key);
        document.head.append(tag);
      }
      tag.content = content;
    }
  }, [title]);
}
