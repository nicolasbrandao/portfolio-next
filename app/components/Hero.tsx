import classNames from 'classnames'
import { MdOutlineFileDownload } from 'react-icons/md'
import { Ubuntu_Mono } from 'next/font/google'
import linksURLs from '../constants/hyperlinks'
import Paper from './common/Paper'
import Button from './common/Button'

const ubuntuMono = Ubuntu_Mono({ weight: '400', subsets: ['latin'] })

export default function Hero() {
  const heroContainerClass = classNames(
    'flex',
    'flex-col',
    'gap-10',
    'min-h-full',
    'my-auto'
  )

  const greetingClass = classNames(
    'text-2xl',
    'text-blue',
    ubuntuMono.className
  )

  const myNameClass = classNames(
    'text-[2rem]',
    'md:text-[4rem]',
    'xl:text-[5rem]',
    'font-bold',
    'before:content-["<"]',
    'before:text-green',
    'after:content-["/>"]',
    'after:text-green'
  )

  const titleClass = classNames(
    'text-3xl',
    'md:text-5xl',
    'text-frg2',
    'font-bold'
  )

  const iconClass = classNames('text-3xl')

  return (
    <Paper id="home">
      <div className={heroContainerClass}>
        <p className={greetingClass}>Olá, meu nome é</p>
        <p className={myNameClass}>Nícolas Brandão</p>
        <p className={titleClass}>Sou Desenvolvedor Full-stack</p>
        <p>
          Constantemente melhorando minha habilidade em construir para a web.
          Uso principalmente React, Redux, Next e TypeScript para desenvolver
          boas experiências para o usuário e mantenedores do código
        </p>
        <Button href={linksURLs.resume}>
          <span>Download Currículo</span>
          <MdOutlineFileDownload className={iconClass} aria-hidden="true" />
        </Button>
      </div>
    </Paper>
  )
}
