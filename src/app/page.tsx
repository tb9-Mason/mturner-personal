import Link from 'next/link';
import { Heading, PageLayout } from './_common/components';
import { NameTag } from './_components';

export default function Home() {
  return (
    <PageLayout className="text-center">
      <Heading className="sr-only" tag="h1">
        Mason Turner - Atlanta Software Developer
      </Heading>
      <div className="mx-auto">
        <NameTag />
      </div>
      <section className="flex flex-col gap-4">
        <Heading tag="h2">I&apos;m a software developer from Atlanta, Georgia.</Heading>
        <p>
          I&apos;ve <Link href="projects">built applications</Link> for enterprise, startup, and non-profit clients;
          turning ideas into requirements, requirements into code, and code into working solutions.
        </p>
        <p>Most recently, I&apos;ve been building with TypeScript, React, Node.js/Express, GraphQL, and Tailwind.</p>
        <p>
          Looking to build something together? <Link href="contact">Get in touch!</Link>
        </p>
      </section>
    </PageLayout>
  );
}
