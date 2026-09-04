import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://tntthoaan.vercel.app',
      lastModified: new Date(),
    },
  ]
}
