import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://roamandroarsafari.com';

  const staticPages = [
    '',
    '/about',
    '/contact',
    '/thank-you',
    '/terms-and-conditions',
    '/privacy-policy',
    '/disclaimer',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const zones = [
    'bijrani',
    'jhirna',
    'dhela',
    'garjia',
    'durga-devi',
    'phato',
    'sitabani',
    'heritage',
    'haathidagar',
    'canter-safari',
    'dhikala-stay',
    'elephant-safari',
  ].map((zone) => ({
    url: `${baseUrl}/services/${zone}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...staticPages, ...zones];
}
