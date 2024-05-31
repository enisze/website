import { projects } from './constants'
import { EventWizard } from './eventWizard'
import { HorseRace } from './horserace'
import { Neologism } from './neologism'
import { Portfolio } from './portfolio'
import { Proprate } from './proprate'
import { Teampilot } from './teampilot'

const Page = ({
  params: { name }
}: {
  params: {
    name: string
  }
}) => {
  if (name === 'portfolio') return <Portfolio />
  if (name === 'neologism') return <Neologism />
  if (name === 'eventWizard') return <EventWizard />
  if (name === 'teampilot') return <Teampilot />
  if (name === 'proprate') return <Proprate />
  if (name === 'horserace') return <HorseRace />
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    params: {
      name: project
    }
  }))
}

export default Page
