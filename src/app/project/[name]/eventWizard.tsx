import { ProjectDetails } from '../../../components/ProjectDetails'
import { getItemsByLabels, type StackLabel } from '../../../components/stack'

const labels: StackLabel[] = [
  'React',
  'Typescript',
  'Tailwind',
  'Next.js',
  'tRPC',
  'Prisma',
  'PlanetScale',
  'Redis',
  'Vercel'
]

const skills = getItemsByLabels(labels)

export const EventWizard = () => (
  <ProjectDetails
    title='Event Wizard'
    projectLink='https://football-organizer.vercel.app/'
    githubLink='https://github.com/enisze/football-organizer'
    context='Private project'
    maintenance='Active'
    skills={skills}
    imageSrcFirst='/images/eventWizard.webp'
    imageSrcSecond='/images/eventWizard2.webp'
    description={`
        This web app allows users to organize and schedule events, with a
        special focus on football events that are organized for friends. The
        group page provides a user-friendly calendar view, offering a quick
        glance at upcoming events. Here, users can see essential event details
        such as date, time, location, and the number of participants who have
        already signed up. Members of the group can easily access more
        information about each event by clicking on individual listings. They
        can also sign up for events they're interested in attending.
        <br/>
        Event organizers have the ability to create new scheduled events, inputting
        all the relevant information to ensure a smooth experience for participants.
        One standout feature of this platform is the ability to send email reminders
        to keep members informed and engaged. Users can receive reminders for upcoming
        events, ensuring they don't miss out on any football action.
        <br/>
        Additionally, the system can send notifications for any pending payments,
        making it convenient for members to stay on top of their financial commitments.
        It also includes a helpful cronjob feature that periodically checks the user's
        email for PayPal notifications, allowing members and group owners to track
        their payment status easily. This feature is particularly beneficial as it
        helps to save on PayPal fees, making the entire payment process free.
        <br/>
        In summary, this web app offers a straightforward and effective solution
        for football enthusiasts to discover, schedule, and participate in pick-up
        games through a centralized online system. With the added convenience of
        email reminders and payment tracking, it ensures that everyone stays connected
        and engaged in the world of football events.`}
  />
)
