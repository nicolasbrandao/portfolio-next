import { projectsData } from '../constants/projectsData'
import classNames from 'classnames'
import Paper from './Paper'
import TitleHeader from './TitleHeader'
import ProjectContainer from './ProjectContainer'

export default function Projects() {
  const projectsListContainerClass = classNames(
    'flex',
    'flex-col',
    'my-auto'
  )
  return (
    <Paper>
      <TitleHeader>Projetos</TitleHeader>
      <div className={projectsListContainerClass}>
        {projectsData.map((project: Project) => {
          return <ProjectContainer {...project} />
        })}
      </div>
    </Paper>
  )
}
