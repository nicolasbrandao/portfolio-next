import classNames from 'classnames'
import { HiOutlineFolder } from 'react-icons/hi'
import { SiGithub } from 'react-icons/si'
import { FiExternalLink } from 'react-icons/fi'
import { Ubuntu_Mono } from 'next/font/google'

const ubuntuMono = Ubuntu_Mono({ weight: '400', subsets: ['latin'] })

export default function ProjectCard(project: Project) {
  const title = 'Gamer Shelf'
  const description =
    'Projeto de uma página que utiliza a Free-to-play API para criar um web app onde o usuário pode construir uma biblioteca de jogos'
  const technologies = 'React Redux RTKQuery ReactRouter TypeScript'

  const containerClass = classNames(
    'flex',
    'flex-col',
    'justify-between',
    'bg-bcg2',
    'rounded-lg',
    'h-[400px]',
    'w-[250px]',
    'p-4',
    'absolute',
    'right-0'
  )

  const headerClass = classNames('flex', 'flex-col')

  const headerIconsClass = classNames('flex', 'justify-between', 'items-center')

  const folderIcon = classNames('text-4xl')

  const externalIconsClass = classNames(
    'flex',
    'gap-4',
    'text-xl',
    'text-green'
  )

  const titleClass = classNames('font-bold', 'text-2xl')

  const technologiesClass = classNames(ubuntuMono.className, 'text-green')

  return (
    <div className={containerClass}>
      <header className={headerClass}>
        <div className={headerIconsClass}>
          <HiOutlineFolder className={folderIcon} />
          <div className={externalIconsClass}>
            <SiGithub />
            <FiExternalLink />
          </div>
        </div>
        <h2 className={titleClass}>{title}</h2>
      </header>
      <p>{description}</p>
      <p className={technologiesClass}>{technologies}</p>
    </div>
  )
}
