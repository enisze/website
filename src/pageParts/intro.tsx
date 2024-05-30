import { TypeAnimation } from 'react-type-animation'
import { About } from '../components/About'
import { ImageWithConfetti } from '../components/ImageWithConfetti'
import { Paragraph } from '../components/Paragraph'

export const Intro = () => (
  <div className='flex flex-col' id='about'>
    <div className='flex justify-center text-3xl'>
      <h1 className='whitespace-pre-line md:whitespace-normal'>
        Hi, I'm Enis Zejnilovic,
        <Paragraph className='whitespace-pre-line'>
          <TypeAnimation
            sequence={[
              ' an Anime Fan.',
              1000,
              ' a Sports Enthusiast.',
              1000,
              ' a Teamplayer.',
              1000,
              ' a Project Manager.',
              1000,
              ' a Full-stack Developer.',
              1000
            ]}
            wrapper='span'
            speed={50}
            repeat={Infinity}
          />
        </Paragraph>
      </h1>
    </div>

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
