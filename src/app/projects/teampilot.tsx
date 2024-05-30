import { ProjectDetails } from '../../components/ProjectDetails'
import { getItemsByLabels, type StackLabel } from '../../components/stack'

const labels: StackLabel[] = [
  'React',
  'Typescript',
  'Tailwind',
  'Next.js',
  'Vercel'
]

const skills = getItemsByLabels(labels)
export const Teampilot = () => (
  <ProjectDetails
    title='Teampilot'
    projectLink='https://teampilot.ai/'
    context='Employed Project'
    maintenance='Active'
    skills={skills}
    imageSrcFirst='/images/teampilot.webp'
    description={`
            Teampilot AI is an AI platform that allows teams to be more
            productive and generate more revenue in several ways: It can
            generate high-quality texts and images tailored to a brand quickly.
            This allows teams to create content like for blogs or social media
            faster. It can automate business processes from day one without
            needing complex IT projects or technical knowledge. This saves time
            and resources. It can connect to internal data sources as well as
            data on competitors, processing large amounts of information easily.
            This helps teams stay ahead. Using AI assistants, it can provide
            sales and customer support across channels. It also automates
            preprocessing of documents for time savings. In summary, Teampilot
            AI uses artificial intelligence to help teams create content,
            automate workflows, and increase productivity through data-driven
            insights.`}
  />
)
