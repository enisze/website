'use client'

import { useState } from 'react'
import { Menu, MenuItem, ProductItem } from './AnimatedNav'

export const NavbarInstane = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null)
  return (
    <Menu setActive={setActive}>
      <MenuItem setActive={setActive} active={active} item='Projects'>
        <div className='text-sm grid grid-cols-2 gap-10 p-4'>
          <ProductItem
            title='Portfolio'
            href='/project/portfolio'
            src='/images/portfolio.webp'
            description={`The portfolio project was created to improve my presence on the web.`}
          />
          <ProductItem
            title='Event Wizard'
            href='/project/eventWizard'
            src='/images/eventWizard.webp'
            description={`Web app for organizing events with friends, calendar view, and email reminders.`}
          />

          <ProductItem
            title='Proprate'
            href='/project/proprate'
            src='/images/proprate.webp'
            description={`Meta search engine for German real estate, AI-powered PropRatings, valuation tools.`}
          />

          <ProductItem
            title='Teampilot'
            href='/project/teampilot'
            src='/images/teampilot.webp'
            description={`AI platform for team productivity, content generation, process automation, data insights.`}
          />

          <ProductItem
            title='HorseRace'
            href='/project/horserace'
            src='/images/horserace.webp'
            description={`Independently developed game, React Native, Expo, card symbol selection, updates planned.`}
          />

          <ProductItem
            title='Neologism 2.0'
            href='/project/neologism'
            src='/images/neologism.webp'
            description={`Collaborative vocabulary creation tool, graph editor, URI generation, RDF export.`}
          />
        </div>
      </MenuItem>
    </Menu>
  )
}
