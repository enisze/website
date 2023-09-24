type StackLabel =
    | 'Typescript'
    | 'React'
    | 'Next.js'
    | 'tRPC'
    | 'GraphQL'
    | 'Yarn'
    | 'Vercel'
    | 'AWS'
    | 'Datadog'
    | 'Serverless'
    | 'LaunchDarkly'
    | 'Mailtrap'
    | 'Styled Comp.'
    | 'Tailwind'
    | 'Twin-Macro'
    | 'Mjml'
    | 'Headless UI'
    | 'Material UI'
    | 'Prisma'
    | 'Redis'
    | 'PlanetScale'
    | 'ElasticSearch'
    | 'Jest'
    | 'Cypress'
    | 'Storybook'
    | 'ESLint'
    | 'Prettier'
    | 'GitHub Actions'
    | 'Linear'
    | 'GitHub'
    | 'Notion'
    | 'VS Code'
    | 'Discord'
    | 'Teams'
    | 'Playwright'

export type StackItem = {
    label: StackLabel
    imgUrl: string
    href: string
    isSmall: boolean
    baseColor?: 'white' | 'black'
}

type Stack = {
    title: string
    items: StackItem[]
}

export const stacks: Stack[] = [
    {
        title: 'Dream Stack',
        items: [
            {
                label: 'Typescript',
                imgUrl: '/images/jobs/stack/dev-logo-ts.svg',
                href: 'https://www.typescriptlang.org/',
                isSmall: false,
            },
            {
                label: 'React',
                imgUrl: '/images/jobs/stack/dev-logo-react.svg',
                href: 'https://reactjs.org/',
                isSmall: false,
                baseColor: 'white',
            },
            {
                label: 'Next.js',
                imgUrl: '/images/jobs/stack/next-js-seeklogo.com.svg',
                href: 'https://nextjs.org/',
                isSmall: false,
                baseColor: 'white',
            },
            {
                label: 'tRPC',
                imgUrl: '/images/jobs/stack/trpc.svg',
                href: 'https://trpc.io/',
                isSmall: false,
            },
            {
                label: 'GraphQL',
                imgUrl: '/images/jobs/stack/GraphQL_Logo.svg',
                href: 'https://graphql.org/',
                isSmall: true,
            },
            {
                label: 'Yarn',
                imgUrl: '/images/jobs/stack/yarn.svg',
                href: 'https://yarnpkg.com/',
                isSmall: true,
            },
        ],
    },
    {
        title: 'SaaS Stack',
        items: [
            {
                label: 'Vercel',
                imgUrl: '/images/jobs/stack/Vercel.svg',
                href: 'https://vercel.com/',
                isSmall: false,
                baseColor: 'white',
            },
            {
                label: 'AWS',
                imgUrl: '/images/jobs/stack/Amazon_Web_Services_Logo.svg',
                href: 'https://aws.amazon.com/de/?nc2=h_lg',
                isSmall: false,
            },
            {
                label: 'Datadog',
                imgUrl: '/images/jobs/stack/datadog-1.svg',
                href: 'https://www.datadoghq.com/',
                isSmall: false,
                baseColor: 'white',
            },
            {
                label: 'Serverless',
                imgUrl: '/images/jobs/stack/serverless.svg',
                href: 'https://www.serverless.com/',
                isSmall: false,
            },
            {
                label: 'LaunchDarkly',
                imgUrl: '/images/jobs/stack/Launch-Darkly.svg',
                href: 'https://launchdarkly.com/',
                isSmall: true,
                baseColor: 'white',
            },
            {
                label: 'Mailtrap',
                imgUrl: '/images/jobs/stack/mailtrap-new-logo.svg',
                href: 'https://mailtrap.io/',
                isSmall: true,
                baseColor: 'white',
            },
        ],
    },
    {
        title: 'UI Stack',
        items: [
            {
                label: 'Styled Comp.',
                imgUrl: '/images/jobs/stack/styled-components.svg',
                href: 'https://styled-components.com/',
                isSmall: true,
            },
            {
                label: 'Tailwind',
                imgUrl: '/images/jobs/stack/tailwind-css-logo-vector.svg',
                href: 'https://tailwindcss.com/',
                isSmall: false,
            },
            {
                label: 'Twin-Macro',
                imgUrl: '/images/jobs/stack/twin.svg',
                href: 'https://github.com/ben-rogerson/twin.macro',
                isSmall: true,
                baseColor: 'white',
            },
            {
                label: 'Mjml',
                imgUrl: '/images/jobs/stack/mjml-by-mailjet.svg',
                href: 'https://mjml.io/',
                isSmall: true,
            },
            {
                label: 'Headless UI',
                imgUrl: '/images/jobs/stack/headerless-ui.svg',
                href: 'https://headlessui.com/',
                isSmall: false,
                baseColor: 'white',
            },
            {
                label: 'Material UI',
                imgUrl: '/images/jobs/stack/material-ui.svg',
                href: 'https://mui.com/',
                isSmall: true,
            },
        ],
    },
    {
        title: 'DB Stack',
        items: [
            {
                label: 'Prisma',
                imgUrl: '/images/jobs/stack/prisma.svg',
                href: 'https://www.prisma.io/',
                isSmall: false,
                baseColor: 'black',
            },
            {
                label: 'Redis',
                imgUrl: '/images/jobs/stack/redis.svg',
                href: 'https://redis.io/',
                isSmall: false,
            },
            {
                label: 'PlanetScale',
                imgUrl: '/images/jobs/stack/planetscale.svg',
                href: 'https://planetscale.com/',
                isSmall: true,
                baseColor: 'white',
            },
            {
                label: 'ElasticSearch',
                imgUrl: '/images/jobs/stack/elasticsearch.svg',
                href: 'https://www.elastic.co/',
                isSmall: true,
            },
        ],
    },
    {
        title: 'Test Stack',
        items: [
            {
                label: 'Jest',
                imgUrl: '/images/jobs/stack/jest.svg',
                href: 'https://jestjs.io/',
                isSmall: false,
            },
            {
                label: 'Cypress',
                imgUrl: '/images/jobs/stack/cypress-io-logo-round-flat.svg',
                href: 'https://www.cypress.io/',
                isSmall: false,
            },
            {
                label: 'Storybook',
                imgUrl: '/images/jobs/stack/storybook.svg',
                href: 'https://storybook.js.org/',
                isSmall: false,
            },
            {
                label: 'ESLint',
                imgUrl: '/images/jobs/stack/ESLint.svg',
                href: 'https://eslint.org/',
                isSmall: true,
                baseColor: 'white',
            },
            {
                label: 'Prettier',
                imgUrl: '/images/jobs/stack/prettier.svg',
                href: 'https://prettier.io/',
                isSmall: true,
            },
            {
                label: 'GitHub Actions',
                imgUrl: '/images/jobs/stack/git-hub-actions.svg',
                href: 'https://github.com/features/actions',
                isSmall: false,
            },
            {
                label: 'Playwright',
                imgUrl: '/images/jobs/stack/playwright-seeklogo.svg',
                href: 'https://playwright.dev/',
                isSmall: true,
            },
        ],
    },
    {
        title: 'Tool Stack',
        items: [
            {
                label: 'Linear',
                imgUrl: '/images/jobs/stack/linear.svg',
                href: 'https://linear.app/',
                isSmall: false,
                baseColor: 'white',
            },
            {
                label: 'GitHub',
                imgUrl: '/images/jobs/stack/github.svg',
                href: 'https://github.com/',
                isSmall: false,
                baseColor: 'white',
            },
            {
                label: 'Notion',
                imgUrl: '/images/jobs/stack/notion.svg',
                href: 'https://www.notion.so/',
                isSmall: false,
            },
            {
                label: 'VS Code',
                imgUrl: '/images/jobs/stack/Visual_Studio_Code_1.35_icon.svg',
                href: 'https://code.visualstudio.com/',
                isSmall: true,
            },
            {
                label: 'Discord',
                imgUrl: '/images/jobs/stack/Discord-Logo+Wordmark-White.svg',
                href: 'https://discord.com/',
                isSmall: false,
                baseColor: 'white',
            },
            {
                label: 'Teams',
                imgUrl: '/images/jobs/stack/ms-logo-t.svg',
                href: 'https://www.microsoft.com/de-de/microsoft-teams/download-app',
                isSmall: true,
            },
        ],
    },
]
