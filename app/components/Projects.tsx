import classNames from 'classnames'
import { Project } from '@/types'
import projectsData from '../constants/projectsData'
import Paper from './common/Paper'
import TitleHeader from './common/TitleHeader'
import ProjectContainer from './ProjectContainer'

export default function Projects() {
  const projectsListContainerClass = classNames(
    'flex',
    'flex-col',
    'my-auto',
    'gap-16',
    'pt-20'
  )
  return (
    <Paper id="projects">
      <TitleHeader>Projetos</TitleHeader>
      <div className={projectsListContainerClass}>
        {projectsData.map((project: Project) => (
          <ProjectContainer key={project.id} project={project} />
        ))}
      </div>
    </Paper>
  )
}
