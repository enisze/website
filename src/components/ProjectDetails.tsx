import { Heading } from 'lucide-react'
import Image from 'next/image'
import { GithubLink } from './GithubLink'
import { ProjectLink } from './ProjectLink'
import { Skill } from './Skill'
import type { StackItem } from './stack'

type Props = {
  title: string
  skills: StackItem[]
  context: string
  maintenance: string
  githubLink?: string
  projectLink?: string
  description: string
  imageSrcFirst: string
  imageSrcSecond?: string
}

export const ProjectDetails = (props: Props) => {
  const {
    skills,
    title,
    githubLink,
    projectLink,
    context,
    description,
    maintenance,
    imageSrcFirst,
    imageSrcSecond
  } = props

  return (
    <div className='flex flex-col gap-y-2'>
      <Heading>{title}</Heading>
      <div className='flex flex-col-reverse md:flex-row gap-4 justify-between'>
        <div className='flex flex-col gap-4'>
          <h2 className='text-2xl font-bold underline decoration-blue-500 underline-offset-8'>
            Context
          </h2>
          <span>{context}</span>
          <h2 className='text-2xl font-bold underline decoration-blue-500 underline-offset-8'>
            Maintenance
          </h2>
          <span className='bg-blue-400 dark:bg-blue-800 rounded-xl p-1 w-fit'>
            {maintenance}
          </span>

          <h2 className='text-2xl font-bold underline decoration-blue-500 underline-offset-8'>
            Sources
          </h2>
          <div className='flex gap-2'>
            <GithubLink githubLink={githubLink} />
            <ProjectLink projectLink={projectLink} />
          </div>
        </div>

        <Image
          src={imageSrcFirst}
          alt='Event Wizard User Screenshot'
          width={932}
          height={910}
          className={`rounded-xl max-w-[90vw] md:max-w-[70vw]`}
          decoding='async'
        />
      </div>

      <div className='space-y-4'>
        <h2 className='text-2xl font-bold underline decoration-blue-500 underline-offset-8'>
          Main Technologies used
        </h2>

        <div className='flex gap-3 flex-wrap'>
          {skills.map((item) => (
            <Skill item={item} />
          ))}
        </div>
      </div>

      <div className='to-blue-500 from-white dark:from-slate-800 dark:to-blue-400 bg-gradient-to-r pt-2 mt-4 rounded-full w-1/2'></div>
      <span>
        {description.split('<br/>').map((entry, idx) => (
          <>
            <span>
              {entry}
              <br />
              <br />
            </span>
            {idx === 1 && imageSrcSecond && (
              <Image
                src={imageSrcSecond}
                alt='Screenshot'
                width={932}
                height={910}
                className={`rounded-xl self-center mb-4 max-w-[90vw] md:max-w-[70vw]`}
                decoding='async'
              />
            )}
          </>
        ))}
      </span>
    </div>
  )
}
