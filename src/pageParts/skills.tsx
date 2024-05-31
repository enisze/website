'use client'
import { Dock, DockIcon } from '@/components/Dock'
import IconCloud from '@/components/IconCloud'
import { Globe, Text } from 'lucide-react'
import { useState } from 'react'
import { Heading } from '../components/Heading'
import { Skill } from '../components/Skill'
import { stacks } from '../components/stack'

export const Skills = () => {
  const [showGlobe, setShowGlobe] = useState(true)

  return (
    <section className='scroll-m-20 space-y-4 pt-5' id='skills'>
      <Heading>Technical Skills</Heading>

      {showGlobe ? (
        <IconCloud
          iconSlugs={[
            'typescript',
            'javascript',
            'react',
            'android',
            'html5',
            'css3',
            'nodedotjs',
            'express',
            'nextdotjs',
            'prisma',
            'amazonaws',
            'postgresql',
            'vercel',
            'testinglibrary',
            'jest',
            'cypress',
            'docker',
            'git',
            'jira',
            'github',
            'gitlab',
            'visualstudiocode',
            'androidstudio',
            'figma',
            'graphql',
            'yarn',
            'trpc',
            'bun',
            'pnpm',
            'mailtrap',
            'expo',
            'redis',
            'eslint',
            'prettier',
            'playwright',
            'linear',
            'vim',
            'notion',
            'discord',
            'microsoftteams',
            'githubactions'
          ]}
        />
      ) : (
        <div className='flex flex-col gap-4'>
          {stacks.map((stack, index) => {
            return (
              <div className='flex flex-col w-full gap-4' key={index}>
                <h2 className='text-2xl font-bold underline decoration-blue-500 underline-offset-8'>
                  {stack.title}
                </h2>
                <div className='flex flex-row flex-wrap gap-4'>
                  {stack.items.map((item, index) => {
                    return <Skill item={item} key={index} />
                  })}
                </div>
              </div>
            )
          })}
        </div>
      )}

      <Dock>
        <DockIcon
          onClick={() => setShowGlobe(false)}
          title='Show Skills as List'
        >
          <Text className='h-6 w-6' />
        </DockIcon>
        <DockIcon
          onClick={() => setShowGlobe(true)}
          title='Show Skills as Cloud'
        >
          <Globe className='h-6 w-6' />
        </DockIcon>
      </Dock>
    </section>
  )
}
