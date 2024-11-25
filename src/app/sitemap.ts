import type { MetadataRoute } from 'next'
import { projects } from './project/[name]/constants'

export default function sitemap(): MetadataRoute.Sitemap {
	const paths: MetadataRoute.Sitemap = projects.map((project) => {
		return {
			url: `https://zejnilovic.de/project/${project}`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8
		}
	})

	const basePath: MetadataRoute.Sitemap = [
		{
			url: 'https://zejnilovic.de',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8
		}
	]

	return [...basePath, ...paths]
}
