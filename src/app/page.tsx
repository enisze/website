//TODO: Sitemap, robots, themeprovider for dark & lightmode
// some padding between the page parts add twitter handle

import { Intro } from '@/pageParts/intro'

//Fix mailing
export default function Home() {
  return (
    <div className='flex flex-col gap-y-3 scroll-mt-32 '>
      <Intro />
    </div>
  )
}
