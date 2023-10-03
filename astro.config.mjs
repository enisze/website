import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/serverless'
import { defineConfig } from 'astro/config'

import robotsTxt from 'astro-robots-txt'

// https://astro.build/config
export default defineConfig({
    output: 'server',
    site: 'https://website-enisze.vercel.app/',
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
