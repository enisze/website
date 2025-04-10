export type StackLabel =
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
	| 'VIM'
	| 'Bun'
	| 'Builder.io'
	| 'Java'
	| 'Docker'
	| 'Angular'
	| 'Expo'
	| 'React Native'
	| 'Astro'
	| 'Node.js'
	| 'Drizzle'
	| 'Tanstack Query'
	| 'Tanstack Table'
	| 'Jotai'
	| 'React Hook Form'
	| 'Auth.js'
	| 'AI SDK'
	| 'Zod'
	| 'PostgreSQL'
	| 'MongoDB'
	| 'SQL'
	| 'Neon'
	| 'Azure'
	| 'Git'
	| 'Jira'
	| 'Confluence'
	| 'YAML'
	| 'JSON'
	| 'Swagger'
	| 'Customer.io'
	| 'Airtable'
	| 'Netlify'

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
		title: 'Technologies',
		items: [
			{
				label: 'Typescript',
				imgUrl: '/images/stack/dev-logo-ts.svg',
				href: 'https://www.typescriptlang.org/',
				isSmall: false
			},
			{
				label: 'React',
				imgUrl: '/images/stack/dev-logo-react.svg',
				href: 'https://reactjs.org/',
				isSmall: false,
				baseColor: 'white'
			},
			{
				label: 'React Native',
				imgUrl: '/images/stack/dev-logo-react.svg',
				href: 'https://reactnative.dev/',
				isSmall: true,
				baseColor: 'white'
			},
			{
				label: 'Next.js',
				imgUrl: '/images/stack/next-js-seeklogo.com.svg',
				href: 'https://nextjs.org/',
				isSmall: false,
				baseColor: 'white'
			},
			{
				label: 'Astro',
				imgUrl: '/images/stack/Astro.svg',
				href: 'https://astro.build/',
				isSmall: false,
				baseColor: 'white'
			},
			{
				label: 'tRPC',
				imgUrl: '/images/stack/trpc.svg',
				href: 'https://trpc.io/',
				isSmall: false
			},
			{
				label: 'GraphQL',
				imgUrl: '/images/stack/GraphQL_Logo.svg',
				href: 'https://graphql.org/',
				isSmall: true
			},
			{
				label: 'Yarn',
				imgUrl: '/images/stack/yarn.svg',
				href: 'https://yarnpkg.com/',
				isSmall: true
			},

			{
				label: 'Bun',
				imgUrl: '/images/stack/bun.svg',
				href: 'https://bun.sh/',
				isSmall: true
			},
			{
				label: 'YAML',
				imgUrl: '/images/stack/yaml.svg',
				href: 'https://yaml.org/',
				isSmall: true
			},
			{
				label: 'JSON',
				imgUrl: '/images/stack/json.svg',
				href: 'https://www.json.org/',
				isSmall: true
			}
		]
	},
	{
		title: 'SaaS',
		items: [
			{
				label: 'Vercel',
				imgUrl: '/images/stack/Vercel.svg',
				href: 'https://vercel.com/',
				isSmall: false,
				baseColor: 'white'
			},
			{
				label: 'AWS',
				imgUrl: '/images/stack/Amazon_Web_Services_Logo.svg',
				href: 'https://aws.amazon.com/de/?nc2=h_lg',
				isSmall: false,
				baseColor: 'white'
			},
			{
				label: 'Datadog',
				imgUrl: '/images/stack/datadog-1.svg',
				href: 'https://www.datadoghq.com/',
				isSmall: false,
				baseColor: 'white'
			},
			{
				label: 'Serverless',
				imgUrl: '/images/stack/serverless.svg',
				href: 'https://www.serverless.com/',
				isSmall: false
			},
			{
				label: 'LaunchDarkly',
				imgUrl: '/images/stack/Launch-Darkly.svg',
				href: 'https://launchdarkly.com/',
				isSmall: true,
				baseColor: 'white'
			},
			{
				label: 'Customer.io',
				imgUrl: '/images/stack/customer-io.svg',
				href: 'https://customer.io/',
				isSmall: true
			},
			{
				label: 'Mailtrap',
				imgUrl: '/images/stack/mailtrap-new-logo.svg',
				href: 'https://mailtrap.io/',
				isSmall: true,
				baseColor: 'white'
			},
			{
				label: 'Netlify',
				imgUrl: '/images/stack/netlify.svg',
				href: 'https://www.netlify.com/',
				isSmall: true,
				baseColor: 'white'
			},
			{
				label: 'Builder.io',
				imgUrl: '/images/stack/builderIO.svg',
				href: 'https://www.builder.io/',
				isSmall: true
				// baseColor: 'white',
			},
			{
				label: 'Expo',
				imgUrl: '/images/stack/expo.svg',
				href: 'https://expo.dev/',
				isSmall: true
				// baseColor: 'white',
			}
		]
	},
	{
		title: 'Frontend',
		items: [
			{
				label: 'Tanstack Query',
				imgUrl: '/images/stack/tanstack-logo.png',
				href: 'https://tanstack.com/query/latest',
				isSmall: false
			},
			{
				label: 'Tanstack Table',
				imgUrl: '/images/stack/tanstack-logo.png',
				href: 'https://tanstack.com/table/latest',
				isSmall: false
			},
			{
				label: 'Jotai',
				imgUrl: '/images/stack/jotai.svg',
				href: 'https://jotai.org/',
				isSmall: true
			},
			{
				label: 'React Hook Form',
				imgUrl: '/images/stack/react-hook-form.svg',
				href: 'https://react-hook-form.com/',
				isSmall: true
			},
			{
				label: 'Styled Comp.',
				imgUrl: '/images/stack/styled-components.svg',
				href: 'https://styled-components.com/',
				isSmall: true
			},
			{
				label: 'Tailwind',
				imgUrl: '/images/stack/tailwind-css-logo-vector.svg',
				href: 'https://tailwindcss.com/',
				isSmall: false
			},
			{
				label: 'Twin-Macro',
				imgUrl: '/images/stack/twin.svg',
				href: 'https://github.com/ben-rogerson/twin.macro',
				isSmall: true,
				baseColor: 'white'
			},
			{
				label: 'Mjml',
				imgUrl: '/images/stack/mjml-by-mailjet.svg',
				href: 'https://mjml.io/',
				isSmall: true
			},
			{
				label: 'Headless UI',
				imgUrl: '/images/stack/headerless-ui.svg',
				href: 'https://headlessui.com/',
				isSmall: false,
				baseColor: 'white'
			},
			{
				label: 'Material UI',
				imgUrl: '/images/stack/material-ui.svg',
				href: 'https://mui.com/',
				isSmall: true
			}
		]
	},
	{
		title: 'Backend',
		items: [
			{
				label: 'Node.js',
				imgUrl: '/images/stack/node.svg',
				href: 'https://nodejs.org/',
				isSmall: false
			},
			{
				label: 'Auth.js',
				imgUrl: '/images/stack/auth.svg',
				href: 'https://authjs.dev/',
				isSmall: true
			},
			{
				label: 'AI SDK',
				imgUrl: '/images/stack/ai.svg',
				href: 'https://ai-sdk.com/',
				isSmall: true
			},
			{
				label: 'Zod',
				imgUrl: '/images/stack/zod.svg',
				href: 'https://zod.dev/',
				isSmall: true
			},
			{
				label: 'Prisma',
				imgUrl: '/images/stack/prisma.svg',
				href: 'https://www.prisma.io/',
				isSmall: false,
				baseColor: 'black'
			},
			{
				label: 'Redis',
				imgUrl: '/images/stack/redis.svg',
				href: 'https://redis.io/',
				isSmall: false
			},
			{
				label: 'PlanetScale',
				imgUrl: '/images/stack/planetscale.svg',
				href: 'https://planetscale.com/',
				isSmall: true,
				baseColor: 'white'
			},
			{
				label: 'ElasticSearch',
				imgUrl: '/images/stack/elasticsearch.svg',
				href: 'https://www.elastic.co/',
				isSmall: true
			},
			{
				label: 'PostgreSQL',
				imgUrl: '/images/stack/postgresql.svg',
				href: 'https://www.postgresql.org/',
				isSmall: false
			},
			{
				label: 'MongoDB',
				imgUrl: '/images/stack/mongodb.svg',
				href: 'https://www.mongodb.com/',
				isSmall: false
			},
			{
				label: 'SQL',
				imgUrl: '/images/stack/sql.png',
				href: 'https://en.wikipedia.org/wiki/SQL',
				isSmall: true
			},
			{
				label: 'Neon',
				imgUrl: '/images/stack/neon.svg',
				href: 'https://neon.tech/',
				isSmall: true
			}
		]
	},
	{
		title: 'Testing',
		items: [
			{
				label: 'Jest',
				imgUrl: '/images/stack/jest.svg',
				href: 'https://jestjs.io/',
				isSmall: false
			},
			{
				label: 'Cypress',
				imgUrl: '/images/stack/cypress-io-logo-round-flat.svg',
				href: 'https://www.cypress.io/',
				isSmall: false
			},
			{
				label: 'Storybook',
				imgUrl: '/images/stack/storybook.svg',
				href: 'https://storybook.js.org/',
				isSmall: false
			},
			{
				label: 'ESLint',
				imgUrl: '/images/stack/ESLint.svg',
				href: 'https://eslint.org/',
				isSmall: true,
				baseColor: 'white'
			},
			{
				label: 'Prettier',
				imgUrl: '/images/stack/prettier.svg',
				href: 'https://prettier.io/',
				isSmall: true
			},
			{
				label: 'GitHub Actions',
				imgUrl: '/images/stack/git-hub-actions.svg',
				href: 'https://github.com/features/actions',
				isSmall: false
			},
			{
				label: 'Playwright',
				imgUrl: '/images/stack/playwright-seeklogo.svg',
				href: 'https://playwright.dev/',
				isSmall: true
			}
		]
	},
	{
		title: 'Tools',
		items: [
			{
				label: 'Linear',
				imgUrl: '/images/stack/linear.svg',
				href: 'https://linear.app/',
				isSmall: false,
				baseColor: 'white'
			},
			{
				label: 'VIM',
				imgUrl: '/images/stack/VIM-Dark.svg',
				href: 'https://www.vim.org/',
				isSmall: false
			},
			{
				label: 'GitHub',
				imgUrl: '/images/stack/github.svg',
				href: 'https://github.com/',
				isSmall: false,
				baseColor: 'white'
			},
			{
				label: 'Notion',
				imgUrl: '/images/stack/notion.svg',
				href: 'https://www.notion.so/',
				isSmall: false
			},
			{
				label: 'VS Code',
				imgUrl: '/images/stack/Visual_Studio_Code_1.35_icon.svg',
				href: 'https://code.visualstudio.com/',
				isSmall: true
			},
			{
				label: 'Discord',
				imgUrl: '/images/stack/Discord-Logo+Wordmark-White.svg',
				href: 'https://discord.com/',
				isSmall: false,
				baseColor: 'white'
			},
			{
				label: 'Teams',
				imgUrl: '/images/stack/ms-logo-t.svg',
				href: 'https://www.microsoft.com/de-de/microsoft-teams/download-app',
				isSmall: true
			},
			{
				label: 'Git',
				imgUrl: '/images/stack/git.svg',
				href: 'https://git-scm.com/',
				isSmall: false
			},
			{
				label: 'Swagger',
				imgUrl: '/images/stack/swagger.svg',
				href: 'https://swagger.io/',
				isSmall: true
			},
			{
				label: 'Airtable',
				imgUrl: '/images/stack/airtable.svg',
				href: 'https://www.airtable.com/',
				isSmall: true
			},
			{
				label: 'Jira',
				imgUrl: '/images/stack/jira.svg',
				href: 'https://www.atlassian.com/software/jira',
				isSmall: false
			},
			{
				label: 'Confluence',
				imgUrl: '/images/stack/confluence.svg',
				href: 'https://www.atlassian.com/software/confluence',
				isSmall: true
			}
		]
	}
]

export const allItems = stacks.reduce<StackItem[]>((acc, x) => {
	return [...acc, ...x.items]
}, [])

export const getItemsByLabels = (labels: StackLabel[]) => {
	return allItems.filter((x) => labels.includes(x.label))
}
