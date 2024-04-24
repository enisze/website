import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import robotsTxt from 'astro-robots-txt'
import { defineConfig } from 'astro/config'
import { BASE_URL } from './config'

import cloudflare from '@astrojs/cloudflare'

// https://astro.build/config
export default defineConfig({
    output: 'server',
    site: BASE_URL,
    integrations: [
        mdx(),
        tailwind(),
        react({
            experimentalReactChildren: true,
        }),
        sitemap(),
        robotsTxt(),
    ],
    adapter: cloudflare(),
    vite: {
        ssr: {
            external: [
                'crypto',
                'net',
                'url',
                'util',
                'http',
                'https',
                'stream',
                'zlib',
                'tls',
                'path',
                'fs',
                'assert',
            ],
        },
    },
})
