import Image from 'next/image'
import classNames from 'classnames'
import ProjectCard from './ProjectCard'
import { projectsData } from '../constants/projectsData'

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
      {projectsData.map((project) => {
        return <ProjectCard {...project} />
      })}
    </div>
  )
}
