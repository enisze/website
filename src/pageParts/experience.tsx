import { Heading } from '../components/Layout/Heading'
import { Timeline } from '../components/Layout/Timeline'

export const Experience = async () => (
	<section className='space-y-4 scroll-m-20' id='experience'>
		<Heading>Experience</Heading>
		<Timeline
			entries={[
				{
					title: 'Software Engineer / Project Manager Sodefa GmbH',
					description: `
                    Create, coordinate and delegate tasks using Linear (previously Zenhub). <br/>
                    Developing features in React and Typescript in a Web application.<br/>
                    Managing project Structure using: Nextjs, tRPC, Prisma (previously hasura, graphQL).<br/>
                    Developing an mobile app for iOS and android using: React Native, expo<br/>
                    Version control via Github.`,
					time: 'Sep.2021 - today'
				},
				{
					title: 'Software Engineer Empower GmbH',
					description: `Working with a cross platform team.  <br/> Main Task: Implementing features in the web application.  <br/> Main technologies used: React, Redux, Node, Swagger, Jira, Confluence.`,
					time: 'Jun. 2020 - Aug. 2021'
				},
				{
					title: 'Internship at Western Digital',
					description: `
  Leading the Project: Defect Detection on Images based on Deep Learning. <br/>
Organized the project and distributed the tasks to other interns.<br/>
Gathering and Preprocessing image data using Python.
                    `,
					time: 'Jun. 2019 - Sep. 2019'
				},
				{
					title: 'Software Engineer Fraunhofer IPT',
					description: `Further development of existing software in C#.<br/>
Main Task: Developing a filter functionality for sensor data C#.<br/>
Subtask: Adjusting the web application, desktop application, and database schema (Angular, C#)
                    `,
					time: 'Apr. 2016 - Dec. 2018'
				}
				// {
				// 	title: 'Research Assistant Fraunhofer IPT',
				// 	description: `
				//     Research in Industry 4.0. <br/>
				//     Developing scripts for process automation. <br/>
				//     Modelling and design of web application for industry project. <br/>
				//     `,
				// 	time: 'Apr. 2016 - Aug. 2017'
				// }
			]}
		/>
	</section>
)
