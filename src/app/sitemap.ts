import type { MetadataRoute } from 'next';

const BASE_URL = 'https://narayanasevadal.org';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/impact', '/gallery', '/contact'];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date('2026-06-19'),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
