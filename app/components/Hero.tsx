import classNames from "classnames";
import { MdOutlineFileDownload } from 'react-icons/md'
import Paper from "./Paper";
import Button from "./Button";
import { Ubuntu_Mono } from 'next/font/google'

const ubuntuMono = Ubuntu_Mono({ weight: "400", subsets: ["latin"] })

export default function Hero() {
  const heroContainerClass = classNames(
    'flex',
    'flex-col',
    'gap-10'
  )

  const greetingClass = classNames(
    'text-2xl',
    'text-blue',
    ubuntuMono.className
  )

  const myNameClass = classNames(
    'text-[5rem]',
    'font-bold',
    'before:content-["<"]',
    'before:text-green',
    'after:content-["/>"]',
    'after:text-green',
  )

  const titleClass = classNames(
    'text-5xl',
    'text-frg2',
    'font-bold'
  )

  const bioClass = classNames()

  const iconClass = classNames(
    'text-3xl'
  )

  return (
    <Paper>
      <div className={heroContainerClass}>
        <p className={greetingClass}>Olá, meu nome é</p>
        <p className={myNameClass}>Nícolas Brandão</p>
        <p className={titleClass}>Sou engenheiro de software</p>
        <p className={bioClass}>
          Constantemente melhorarando minha habilidade em construir para a web. Uso principalmente React, Redux, Next e TypeScript para desenvolver boas experiências para o usuário e mantenedores do código
        </p>
        <Button href="#">
          <span>Download Currículo</span>
          <MdOutlineFileDownload className={iconClass}/>  
        </Button>
      </div>
    </Paper>
  )
}
