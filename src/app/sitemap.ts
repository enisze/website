import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	const basePath: MetadataRoute.Sitemap = [
		{
			url: 'https://zejnilovic.de',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8
		}
	]

	return basePath
}
