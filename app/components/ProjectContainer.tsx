import Image from 'next/image'
import classNames from 'classnames'
import ProjectCard from './ProjectCard'

export default function ProjectContainer(project: Project) {
  const containerClass = classNames(
    'flex',
    'items-center',
    'w-full',
    'relative'
  )

  return (
    <div className={containerClass}>
      <Image src={project.image} alt={project.title} height={350} />
      <ProjectCard {...project} />
    </div>
  )
}
