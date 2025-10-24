import type { MetadataRoute } from "next";

export function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/private/"],
      },
    ],
    sitemap: "https://digitlstation.it.com/fr/sitemap.xml",
  };
}
