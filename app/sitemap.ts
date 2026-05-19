import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.atithihome.com'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },

    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    {
      url: `${baseUrl}/warranty`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.75,
    },

    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    {
      url: `${baseUrl}/blog/best-hotel-near-pratiksha-hospital-guwahati`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    {
      url: `${baseUrl}/blog/homestay-in-guwahati-vs-hotel-whats-better-near-pratiksha-hospital`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.64,
    },

    {
      url: `${baseUrl}/blog/family-stay-in-guwahati-safe-comfortable-hotels-near-vip-road`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.64,
    },

    {
      url: `${baseUrl}/blog/24-hours-hotel-guwahati`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.64,
    },

    {
      url: `${baseUrl}/blog/top-reasons-budget-hotel-guwahati-near-vip-road`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.64,
    },

    {
      url: `${baseUrl}/blog/best-homestay-guwahati-for-long-stays`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.64,
    },
  ]
}