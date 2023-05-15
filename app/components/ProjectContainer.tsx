import Image from 'next/image'
import classNames from 'classnames'
import { ProjectProp } from '@/types'
import ProjectCard from './ProjectCard'

export default function ProjectContainer({ project }: ProjectProp) {
  const containerClass = classNames(
    'flex',
    'items-center',
    'w-full',
    'relative'
  )

  const projectImageClass = classNames('hidden', 'md:block')

  return (
    <div className={containerClass}>
      <Image
        src={project.image}
        alt={project.title}
        height={350}
        className={projectImageClass}
        quality={100}
      />
      <ProjectCard project={project} />
    </div>
  )
}
