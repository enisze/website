import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/serverless'
import { defineConfig } from 'astro/config'
import { BASE_URL } from './config'

import robotsTxt from 'astro-robots-txt'

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
    adapter: vercel(),
})
