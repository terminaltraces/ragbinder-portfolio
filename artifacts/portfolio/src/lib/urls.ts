/** Root on the custom domain/Replit; /repository/ on GitHub project Pages. */
export function assetUrl(url: string): string {
  if (!url.startsWith("/") || url.startsWith("//")) return url;
  return `${import.meta.env.BASE_URL.replace(/\/$/, "")}${url}`;
}

export function imageUrl(url: string): string {
  const optimized = import.meta.env.PROD && url.startsWith("/images/")
    ? url.replace(/\.png$/i, ".webp")
    : url;
  return assetUrl(optimized);
}
