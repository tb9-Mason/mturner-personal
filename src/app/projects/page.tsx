import { Heading, PageLayout } from '../_common/components';
import { ProjectCard } from './_components';
import { projects } from './_data';

export default function Examples() {
  return (
    <PageLayout>
      <Heading tag="h1">Mason&apos;s Projects</Heading>
      <p className="text-lg">
        Here&apos;s a few notable projects I&apos;ve worked on. These are all in private repositories, so unfortunately
        I can&apos;t share code. If you want to see some of my personal work, you can go{' '}
        <a href="https://demo.msntrnr.com" target="_blank" rel="noreferrer">
          here.
        </a>
      </p>
      {projects.map((p, index) => {
        return <ProjectCard key={p.id} project={p} index={index} />;
      })}
    </PageLayout>
  );
}
