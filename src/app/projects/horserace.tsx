import Image from 'next/image'
import { ProjectDetails } from '../../components/ProjectDetails'
import { getItemsByLabels, type StackLabel } from '../../components/stack'

const labels: StackLabel[] = ['Typescript', 'Expo', 'React Native']

const skills = getItemsByLabels(labels)

export const HorseRace = () => (
  <>
    <ProjectDetails
      title='HorseRace'
      context='Private Project'
      maintenance='Active'
      githubLink='https://github.com/enisze/horseRace'
      projectLink='https://play.google.com/store/apps/details?id=com.eniszejnilovic.horseRace'
      description={`
    As part of my portfolio, I created the <strong>Horse Race</strong> app. I've been developing this game independently during my free time as a fun way to play around with react native and expo.
    The core functionality of the Game is straightforward yet entertaining. Users are invited to select their favorite card symbol and begin with a set number of sips. If their chosen card emerges 
    as the winner, they have the opportunity to share double the sips as a reward with their friends.
    I am committed to making continuous improvements to the user experience with updates and new features,
     including random in-game events and player influence on game outcomes to elevate your gaming experience.
    `}
      imageSrcFirst='/images/horserace.webp'
      skills={skills}
    />

    <div className='flex flex-col justify-center md:flex-row gap-6'>
      <Image
        src={'/images/horserace2.jpg'}
        alt='Event Wizard User Screenshot'
        width={932}
        height={910}
        className={`rounded-xl max-w-[90vw] md:max-w-[40vw]`}
        decoding='async'
        loading='lazy'
      />

      <Image
        src={'/images/horserace3.webp'}
        alt='Event Wizard User Screenshot'
        width={932}
        height={910}
        className={`rounded-xl max-w-[90vw] md:max-w-[40vw]`}
        decoding='async'
        loading='lazy'
      />
    </div>
  </>
)
