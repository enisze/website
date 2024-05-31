import { FadeText } from '@/components/FadeText'
import WordRotate from '@/components/WordRotate'
import { About } from '../components/About'
import { ImageWithConfetti } from '../components/ImageWithConfetti'

export const Intro = () => (
  <div className='flex flex-col scroll-m-20' id='about'>
    <h1 className='flex flex-col md:flex-row items-center jusify-center text-3xl w-full'>
      <FadeText text={`Hi, I'm Enis Zejnilovic, `} direction='up' />
      <WordRotate
        words={[
          ' a Software Developer.',
          ' an Anime Fan.',
          ' a Sports Enthusiast.',
          ' a Teamplayer.',
          ' a Project Manager.',
          ' a Full-stack Developer.'
        ]}
        className='text-3xl font-bold text-blue-500'
      />
    </h1>

    <div className='grid gap-6 grid-cols-1 lg:grid-cols-2'>
      <div className='order-last md:order-1'>
        <About />
      </div>

      <div className='px-10 md:px-44 md:py-10 lg:order-2 lg:p-4 lg:py-10'>
        <ImageWithConfetti />
      </div>
    </div>
  </div>
)
