'use client'

import { TypeAnimation } from 'react-type-animation'

export const TypingAnimation = () => (
  <TypeAnimation
    sequence={[
      ' a Full-stack Developer.',
      1000,
      ' a Project Manager.',
      1000,
      ' a Teamplayer.',
      1000,
      ' an Anime Fan.',
      1000,
      ' a Sports Enthusiast.',
      1000,
    ]}
    wrapper='span'
    speed={50}
    repeat={Infinity}
    className='text-3xl font-bold text-blue-500'
  />
)
