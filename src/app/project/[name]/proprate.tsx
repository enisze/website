import { ProjectDetails } from '../../../components/ProjectDetails'
import { getItemsByLabels, type StackLabel } from '../../../components/stack'

const labels: StackLabel[] = [
  'React',
  'Typescript',
  'Tailwind',
  'Next.js',
  'Vercel'
]

const skills = getItemsByLabels(labels)

export const Proprate = () => (
  <ProjectDetails
    title='PropRate'
    projectLink='https://proprate.de/'
    context='Employed Project'
    maintenance='Active'
    skills={skills}
    imageSrcFirst='/images/proprate.webp'
    description={`
The PropRate website acts as a meta search engine for the German
real estate market. It searches listings from major portals like
ImmobilienScout24 and eBay Kleinanzeigen and displays all results
together on the PropRate site.<br/>
This provides users with a consolidated view of available properties. 
Each listed property is assigned a PropRating by an artificial intelligence system. 
The PropRating evaluates factors like the location, value development, listing price and 
potential returns to provide users with an insightful overview of a property's attractiveness. 
In addition to search and ratings, PropRate offers users tools to value their own properties. 
Financial calculators also allow modeling of mortgage options and returns to help inform financing decisions.
<br/>
Users can save properties to favorites lists and access market data and analytics through features
 like recent reports. Educational resources in the form of a blog, guides, and a lexicon provide 
 users with information on investing, markets, and other real estate topics. The goal of the
  PropRate platform is to make the German real estate market more transparent for 
  those looking to purchase, sell, or invest in property. It aims to be a one-stop 
  site where users can research listings, access property and market valuations, 
  model finances, and gain knowledge - helping users make well-informed real estate 
  decisions through its free search, rating, and analytical tools.
`}
  />
)
