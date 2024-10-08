import { Heading } from '../components/Layout/Heading'
import { Timeline } from '../components/Layout/Timeline'

export const Education = async () => (
	<section className='space-y-4 scroll-m-20' id='education'>
		<Heading>Education</Heading>
		<Timeline
			entries={[
				{
					title: 'Master of Computer Science, RWTH Aachen University',
					description:
						'RDF Schema Generation, Artificial Intelligence, Data Mining',
					time: 'Oct. 2016 - Aug. 2021'
				},
				{
					title:
						'System Software Engineering (Exchange), Thai German Graduate School of Engineering Bangkok',
					description:
						'Courses: Selected Topics of Machine Learning, Advanced Digital Image Processing',
					time: 'Jan 2019 - Jun 2019'
				},
				{
					title: 'Computer Science (Exchange), Czech Technical University Prag',
					description:
						'Courses: Advanced Database Systems, Efficient Text Pattern Matching, User Interface Design',
					time: 'Sep. 2017 - Feb. 2018'
				},
				{
					title: 'Bachelor of Computer Science, RWTH Aachen University',
					description: 'Generative Development, Machine Learning, Data Science',
					time: 'Oct. 2013 - Oct. 2016'
				}
			]}
		/>
	</section>
)
