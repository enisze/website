import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/serverless'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
    output: 'server',
    integrations: [
        mdx(),
        tailwind(),
        react({
            experimentalReactChildren: true,
        }),
    ],
    adapter: vercel(),
})
