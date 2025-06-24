import { Heading, PageLayout } from '../_common/components';
import { ProjectCard } from './_components';
import { projects } from './_data';

export default function Examples() {
  return (
    <PageLayout>
      <Heading tag="h1" className="text-3xl">
        Projects
      </Heading>
      <p className="text-lg">
        Here is a list of a few notable projects I have worked on. There are a few that I can&apos;t link out to for
        various reasons, but I&apos;ve done my best to provide as much context as possible.
      </p>
      {projects.map((p, index) => {
        return <ProjectCard key={p.id} project={p} index={index} />;
      })}
    </PageLayout>
  );
}
