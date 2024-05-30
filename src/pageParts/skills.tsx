import { Heading } from '../components/Heading'
import { Skill } from '../components/Skill'
import { stacks } from '../components/stack'

export const Skills = () => (
  <section className='scroll-m-16 space-y-4' id='skills'>
    <Heading>Technical Skills</Heading>

    <div className='flex flex-col gap-4'>
      {stacks.map((stack) => {
        return (
          <div className='flex flex-col w-full gap-4'>
            <h2 className='text-2xl font-bold underline decoration-blue-500 underline-offset-8'>
              {stack.title}
            </h2>
            <div className='flex flex-row flex-wrap gap-4'>
              {stack.items.map((item) => {
                return <Skill item={item} />
              })}
            </div>
          </div>
        )
      })}
    </div>
  </section>
)
