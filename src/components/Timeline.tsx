interface Props {
  entries: Array<{
    title: string
    description: string
    time: string
  }>
}

export const Timeline = (props: Props) => {
  const { entries } = props

  const adjustedEntries = entries.map((entry, index) => {
    const splitted = entry.description.split('<br/>')

    return {
      ...entry,
      description: splitted
    }
  })

  return (
    <ol className='relative border-l border-gray-200 dark:border-gray-700'>
      {adjustedEntries.map((entry, index) => {
        return (
          <li className='mb-10 ml-4' key={index}>
            <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700' />
            <time className='mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-300'>
              {entry.time}
            </time>
            <h2 className='text-lg font-semibold'>{entry.title}</h2>
            <p className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>
              {entry.description.map((desc, index) => {
                return (
                  <span key={index}>
                    {desc}
                    <br />
                  </span>
                )
              })}
            </p>
          </li>
        )
      })}
    </ol>
  )
}
