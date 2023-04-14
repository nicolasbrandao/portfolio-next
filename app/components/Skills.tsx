import classNames from 'classnames'
import { FiExternalLink } from 'react-icons/fi'
import Paper from './common/Paper'
import TitleHeader from './common/TitleHeader'
import Paragraph from './common/Paragraph'
import SkillsIcons from './SkillsIcons'
import Button from './common/Button'
import linksURLs from '../constants/hyperlinks'

export default function Skills() {
  const wrapperClass = classNames(
    'flex',
    'flex-col',
    'justify-between',
    'w-full',
    'grow'
  )

  const bodyContainerClass = classNames('mb-[4rem]')
  return (
    <Paper id="skills">
      <div className={wrapperClass}>
        <TitleHeader>Skills</TitleHeader>
        <Paragraph>
          Estas são as principais tecnologias com que tenho trabalhado.
          Atualmente, meu foco principal é React com Redux, Next e TypeScript
        </Paragraph>
        <div className={bodyContainerClass}>
          <SkillsIcons />
          <Button href={linksURLs.notion}>
            Acesse meu Notion
            <FiExternalLink aria-hidden="true" />
          </Button>
        </div>
      </div>
    </Paper>
  )
}
