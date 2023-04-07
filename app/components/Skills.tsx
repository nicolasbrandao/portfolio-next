import classNames from 'classnames'
import { FiExternalLink } from 'react-icons/fi'
import Paper from './Paper'
import TitleHeader from './TitleHeader'
import Paragraph from './Paragraph'
import SkillsIcons from './SkillsIcons'
import Button from './Button'



export default function Skills() {
  const wrapperClass = classNames(
    'flex',
    'flex-col',
    'justify-between',
    'w-full',
    'grow'
  )

  const bodyContainerClass = classNames(
    'mb-[4rem]'
  )
  return (
    <Paper>
      <div className={wrapperClass}>
        <TitleHeader>Skills</TitleHeader>
        <Paragraph>
          Estas são as principais tecnologias com que tenho trabalhado.
          Atualmente, meu foco principal é React com Redux, Next e TypeScript
        </Paragraph>
        <div className={bodyContainerClass}>
          <SkillsIcons />
          <Button href="/">
            Acesse meu Notion
            <FiExternalLink />
          </Button>
        </div>
      </div>
    </Paper>
  )
}
