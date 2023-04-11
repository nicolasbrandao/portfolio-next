import classNames from 'classnames'
import { HiOutlineFolder } from 'react-icons/hi'
import { SiGithub } from 'react-icons/si'
import { FiExternalLink } from 'react-icons/fi'
import { Ubuntu_Mono } from 'next/font/google'
import { ProjectProp } from '@/types'

const ubuntuMono = Ubuntu_Mono({ weight: '400', subsets: ['latin'] })

export default function ProjectCard({ project }: ProjectProp) {
  const containerClass = classNames(
    'flex',
    'flex-col',
    'justify-between',
    'bg-bcg2',
    'rounded-lg',
    'h-[400px]',
    'w-full',
    'md:w-[250px]',
    'p-4',
    'md:absolute',
    'md:right-0'
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
            <a href={project.repoURL} target="_blank" rel="noopener noreferrer">
              <SiGithub />
            </a>
            <a
              href={project.deployURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiExternalLink />
            </a>
          </div>
        </div>
        <h2 className={titleClass}>{project.title}</h2>
      </header>
      <p>{project.description}</p>
      <p className={technologiesClass}>{project.technologies}</p>
    </div>
  )
}
