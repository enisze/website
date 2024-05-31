import { FadeText } from './FadeText'

export const About = () => (
  <div className='text-xl'>
    <FadeText
      text='As a software engineer and project manager, I have developed a broad skill set through my education and professional experience.'
      direction='up'
    />
    <br />
    <FadeText
      text='I studied computer science at RWTH Aachen, focusing on machine learning, AI,
    and data science with Python. My theses involved generative development and
    RDF schema generation.'
      direction='up'
    />
    <br />
    <FadeText
      text='Currently, I work in web and mobile app development, specializing in React,
    TypeScript, and Next.js. I enjoy learning new technologies and tackling
    challenging projects.'
      direction='up'
    />
    <br />
    <FadeText
      text='I have strong leadership skills and thrive in team environments, believing
    that effective communication and adaptability are key to successful project
    management.'
      direction='up'
    />
    <br />
    <FadeText
      text={`Feel free to contact me to discuss potential projects or opportunities. I'm
    always open to exciting new ventures`}
      direction='up'
    />
  </div>
)
