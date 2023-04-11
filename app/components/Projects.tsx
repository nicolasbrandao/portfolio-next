import classNames from 'classnames'
import { Project } from '@/types'
import projectsData from '../constants/projectsData'
import Paper from './Paper'
import TitleHeader from './TitleHeader'
import ProjectContainer from './ProjectContainer'

export default function Projects() {
  const projectsListContainerClass = classNames('flex', 'flex-col', 'my-auto')
  return (
    <Paper>
      <TitleHeader>Projetos</TitleHeader>
      <div className={projectsListContainerClass}>
        {projectsData.map((project: Project) => (
          <ProjectContainer key={project.id} project={project} />
        ))}
      </div>
    </Paper>
  )
}
