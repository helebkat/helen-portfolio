// src/app/imageLoader.ts
export default function imageLoader({ src }: { src: string; width: number; quality?: number }) {
  const isProd = process.env.NODE_ENV === "production";
  const repo = "helen-portfolio";
  
  // For production, add the repo path prefix
  if (isProd) {
    return `/${repo}${src}`;
  }
  
  // For development, return as-is
  return src;
}
