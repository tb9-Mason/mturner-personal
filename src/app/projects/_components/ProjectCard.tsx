import { Heading } from '@/app/_common/components';
import { Project } from '../_interfaces';
import Image from 'next/image';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="w-full card">
      <Heading tag="h2" className="mb-1">
        {project.name} <span className="text-sm font-normal italic">{project.client}</span>
      </Heading>
      <ul className="flex flex-row flex-wrap gap-2">
        {project.technologies.map((t) => (
          <li key={t.name} className="chip">
            {t.name}
          </li>
        ))}
      </ul>
      <hr className="border w-full my-2" />
      {!!project.imagePath && (
        <div className="relative max-w-full aspect-video">
          <Image src={project.imagePath} fill={true} alt={project.name} objectFit="contain" />
        </div>
      )}
      {project.description}
      {Object.keys(project.projectLinks).includes('live') && (
        <>
          <hr className="border w-full my-2" />
          <div>
            <a href={project.projectLinks.live} target="_blank" rel="noreferrer">
              link
            </a>
          </div>
        </>
      )}
    </div>
  );
};
