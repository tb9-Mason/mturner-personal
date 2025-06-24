import { PropsWithChildren } from 'react';
import { Project } from '../_interfaces';

const DescriptionContainer = ({ children }: PropsWithChildren) => {
  return <div className="flex flex-col gap-2">{children}</div>;
};

export const projects: Project[] = [
  {
    id: '01',
    name: 'OM1 Cohort Explorer',
    description: (
      <DescriptionContainer>
        <p>
          In this engagement, I was embedded in Cohort Explorer scrum team for over a year to help accelerate the build
          of an application that allows healthcare providers to gain increased insights into patient cohorts.
        </p>
        <p>As part of their team, I:</p>
        <ul className="list-disc list-inside">
          <li>Managed application state and side effects using Redux and Redux Saga</li>
          <li>Consumed REST APIs to build complex nested components</li>
          <li>
            Worked with designers, product owners, subject matter experts, and the development team to plan and build
            workable solutions
          </li>
          <li>Administered both architectural and visual decisions for the product</li>
        </ul>
        <p>
          These types of product engagements are often my favorites, as I am able to gain some deeper insight into a
          single system, really consuming myself in the collaborative problem solving aspects of development.
        </p>
      </DescriptionContainer>
    ),
    type: 'enterprise',
    imagePath: '/om1.png',
    technologies: [
      {
        name: 'React.js',
      },
      {
        name: 'Typescript',
      },
      {
        name: 'Redux Saga',
      },
      {
        name: 'MUI X',
      },
    ],
    client: 'OM1, Inc.',
    projectLinks: {
      live: 'https://www.om1.com/',
    },
  },
  {
    id: '02',
    name: 'Unnamed Marketing Software',
    description: (
      <DescriptionContainer>
        <p>
          In this project, I led the architecture and development of an AI enabled marketing strategy platform. Backed
          by the client&apos;s industry expertise, my team designed and developed a full-stack application that enables
          marketing teams of all skill levels to generate actionable multi-faceted marketing plans, as well as
          accelerate what were previously tedious marketing tasks.
        </p>
        <p>Some of my responsibilities in this project included:</p>
        <ul className="list-disc list-inside">
          <li>Working with project managers to build a backlog and prioritize development tasks</li>
          <li>Working with designers to ensure that the client&apos;s vision was being met and exceeded</li>
          <li>Working with the client to gather requirements and show progress</li>
          <li>Architecting a Node/Express backend and React frontend MVP</li>
          <li>Researching and consuming OpenAI APIs in a multistage approach that balances cost and performance</li>
        </ul>
        <p>
          Making use of OpenAI&apos;s APIs, I planned a multistep solution for providing contextually aware generative
          content from disparate materials. Since the user-provided inputs could be in an array of different formats,
          the solution needed to standardize them, cache them, and provide steps for user intervention in each step of
          the process. This also included built in feedback loops to improve content over time, reducing the amount of
          human intervention needed to provide quality results.
        </p>
        <p>
          I love researching and refining ways to tackle new challenges while programming. This project is a great
          example of some engaging learning opportunities. Designing an AI workflow, exporting different document types
          using Quarto, and brainstorming interesting ways to filter and suggest data were all enjoyable aspects of
          developing this app.
        </p>
      </DescriptionContainer>
    ),

    type: 'entrepreneur',
    technologies: [
      {
        name: 'React.js',
      },
      {
        name: 'Typescript',
      },
      {
        name: 'Node/Express',
      },
      {
        name: 'GraphQL',
      },
      {
        name: 'Tailwind',
      },
      {
        name: 'OpenAI',
      },
    ],
    client: 'Still in development',
    projectLinks: {},
  },
  {
    id: '03',
    name: 'CDC Foundation Donor Report',
    description: (
      <DescriptionContainer>
        <p>
          In this yearly engagement spanning over 8 years, I built infographic style microsites to highlight the CDC
          Foundation&apos;s yearly achievements.
        </p>
        <p>
          In what were previously plain HTML/CSS/JavaScript builds, I led the adoption of a templatized Next.js build
          for these projects, which drastically reduced the time to completion of each year&apos;s report.
        </p>
        <p>My responsibilities included:</p>
        <ul className="list-disc list-inside">
          <li>
            Developing a reusable Next.js template, reducing total project completion time from 120 hours to ~60 hours
          </li>
          <li>Translating design specs into reusable componentry</li>
          <li>
            Collaborating with the design team to ensure we were making the most of our templatized build without
            sacrificing creativity
          </li>
          <li>Implementing transitions and animations for site imagery and content</li>
        </ul>
        <p>
          Microsites like this are always fun opportunities to play with element and layout transitions, making what
          could be a static experience something with a bit more character. Moreover, I always love the opportunity to
          be a part of sharing the accomplishments of the CDC Foundation throughout the years.
        </p>
      </DescriptionContainer>
    ),
    type: 'non-profit',
    imagePath: '/cdcf-donor-report.png',
    technologies: [
      {
        name: 'React.js',
      },
      {
        name: 'Typescript',
      },
      {
        name: 'Next.js',
      },
      {
        name: 'Tailwind',
      },
    ],
    client: 'CDC Foundation',
    projectLinks: {
      live: 'https://www.cdcfoundation.org/FY2024/index.html',
    },
  },
  {
    id: '04',
    name: 'Broadcom CAP Editor',
    description: (
      <DescriptionContainer>
        <p>
          Broadcom&apos;s CAP (Client Authentication Pages) will likely look familiar to you if you&apos;ve paid with a
          credit card online. These screens are used by payment processors to validate that a card belongs to the user
          making the purchase.
        </p>
        <p>
          Our team was tasked with creating a configuration utility that allowed Broadcom users to create customized CAP
          pages for their clients; a process that usually requires editing server generated HTML pages by hand with a
          risk of overwriting crucial embedded scripts or causing styles to become out of sync over navigation to
          subsequent pages.
        </p>
        <p>
          With close collaboration from the Broadcom team, we built a Node/Express, React, Postgres, and GraphQL
          application which allowed users to:
        </p>
        <ul className="list-disc list-inside">
          <li>
            Define a consistent style for a CAP workflow, including font style and family selection, color palette
            definition, heading images, and iconography
          </li>
          <li>Defining and displaying internationalized strings for arbitrary numbers of languages</li>
          <li>Configuring which screens should be available within a given workflow</li>
          <li>Defining custom JavaScript which should be included within a workflow</li>
          <li>Live previews of configured pages</li>
          <li>
            After everything is configured, export the built HTML/CSS/JavaScript flows to .zip files for distribution
          </li>
        </ul>
        <p>
          All while adhering to the{' '}
          <a href="https://3ds-ux-guidelines.emvco.com/" target="_blank" rel="noreferrer">
            EMVCo 3D Secure UX/UI guidelines
          </a>{' '}
          regarding screen sections and sizes.
        </p>
      </DescriptionContainer>
    ),
    type: 'enterprise',
    imagePath: '/broadcom-cap.png',
    technologies: [
      {
        name: 'React.js',
      },
      {
        name: 'Typescript',
      },
      {
        name: 'Node/Express',
      },
      {
        name: 'GraphQL',
      },
      {
        name: 'Tailwind',
      },
      {
        name: 'Handlebars',
      },
    ],
    client: 'Broadcom',
    projectLinks: {
      live: 'https://www.broadcom.com/info/cybersecurity/3d-secure',
    },
  },
  {
    id: '05',
    name: 'Nucar',
    description: (
      <DescriptionContainer>
        <p>
          This was a greenfield build, kickstarting the development of a headless CMS driven car buying experience which
          was ultimately taken over by an in-house team for longer term development and maintenance. I was responsible
          for implementing some static designs into a functional site consuming a Sanity CMS, which included:
        </p>
        <ul className="list-disc list-inside">
          <li>Rendering large sets of data with searching, sorting, filtering, and pagination</li>
          <li>Interactive elements, such as the budget calculator found on the home page</li>
          <li>Dynamic routing to car detail pages</li>
          <li>Interactive elements for the logged out experience, such as &quot;liking&quot; cars</li>
        </ul>
        <p>
          New builds are great opportunities to try out new technologies and challenge your existing web development
          patterns. I find that every time I build a new application I discover at least one new takeaway to add to my
          development toolkit.
        </p>
      </DescriptionContainer>
    ),
    type: 'enterprise',
    imagePath: '/nucar.png',
    technologies: [
      {
        name: 'React.js',
      },
      {
        name: 'Typescript',
      },
      {
        name: 'Next.js',
      },
    ],
    client: 'Alloy Digital',
    projectLinks: {
      live: 'https://nucar.com/',
    },
  },
  {
    id: '06',
    name: 'Kroger Chef Junior/Lowes DIY',
    description: (
      <DescriptionContainer>
        <p>
          Kroger Chef Junior and Lowes DIY are event creation and ticketing platforms used to coordinate concurrent
          events over many locations. I led the architecture and development of this app along with a team of 4
          developers, initially researching and validating the need for a custom solution, then planning and
          implementing an application that would meet the client&apos;s needs.
        </p>
        <p>
          In a codebase that was reused and tuned for both Kroger and Lowe&apos;s clients, I planned and implemented:
        </p>
        <ul className="list-disc list-inside">
          <li>
            Simultaneous deployment of event registration forms for over 1,000 locations in all 4 US timezones,
            resulting in &gt; 100,000 registrants for events per event day
          </li>

          <li>Location and date based search APIs consumed by external applications to drive users to register</li>
          <li>
            A Rails service pattern architecture for encapsulating business logic, ensuring that long running tasks
            could be run asynchronously and tested in isolation
          </li>
          <li>
            Registration payments driven by the Stripe API for a seamless payment experience, and the ability to issue
            refunds to users for cancelled events or changes of plan
          </li>
        </ul>
        <p>
          Projects like this, in which I can walk into a physical location and see the results of my work are incredibly
          rewarding. In a lot of development engagements, you don&apos;t get to see real world people benefitting from
          your work.
        </p>
      </DescriptionContainer>
    ),
    type: 'enterprise',
    imagePath: '/kroger-chef-jr.png',
    technologies: [
      {
        name: 'Ruby on Rails',
      },
      {
        name: 'Vue.js',
      },
      {
        name: 'Bootstrap',
      },
      {
        name: 'WordPress',
      },
    ],
    client: 'Kroger/Lowes',
    projectLinks: {
      live: 'https://krogerchefjunior.com/',
    },
  },
  {
    id: '07',
    name: 'GTSS Academy',
    description: (
      <DescriptionContainer>
        <p>
          For this project, our team was asked to rebuild a legacy data driven application for the Global Tobacco
          Surveillance System. Previously an SPA written in AngularJS 1.x, the client requested that we make the site
          more lightweight for researchers in developing countries with lower internet speeds, which we were able to
          achieve by:
        </p>
        <ul className="list-disc list-inside">
          <li>
            Converting the site to server rendered pages with Twig, reducing the amount of JavaScript needed to render
            elements to the screen
          </li>
          <li>
            Using{' '}
            <a href="https://github.com/preactjs/preact" target="_blank" rel="noreferrer">
              Preact
            </a>{' '}
            to write interactive components, reducing the asset overhead
          </li>
          <li>Using Webpack to chunk javascript files, further reducing JavaScript asset sizes</li>
          <li>
            Directly storing data which was once queried for, and establishing workflows for updating this data on a
            regular basis through large scale data imports
          </li>
        </ul>
        <p>
          These strategies helped reduce load times by over 50%, ensuring that all users would see performance
          improvements.
        </p>
        <p>
          Later in the life of this project, the content management backend was replaced with a cached GraphQL API,
          further reducing page loads and improving the developer experience.
        </p>
        <p>
          Audits and rebuilds are tasks that I have taken on many times in my career. I really enjoy the process of
          finding bottlenecks and brainstorming solutions to problems like this. Code review/optimization and
          pinpointing bugs aren&apos;t the flashiest things you can do in software development, but can be the most
          satisfying.
        </p>
      </DescriptionContainer>
    ),
    type: 'non-profit',
    imagePath: '/gtss-academy.png',
    technologies: [
      {
        name: 'React.js (Preact)',
      },
      {
        name: 'Node/Express',
      },
      {
        name: 'GraphQL',
      },
      {
        name: 'Twig',
      },
    ],
    client: 'CDC Foundation',
    projectLinks: {
      live: 'https://www.gtssacademy.org/',
    },
  },
];
