import classNames from 'classnames'
import Image from 'next/image'
import { FiExternalLink } from 'react-icons/fi'
import profilePicture from '../../public/profile_picture.png'
import Paper from './Paper'
import TitleHeader from './TitleHeader'
import Button from './Button'
import Paragraph from './Paragraph'

export default function About() {
  const wrapperClass = classNames(
    'flex',
    'flex-col',
    'justify-between',
    'w-full',
    'grow'
  )

  const bodyClass = classNames(
    'flex',
    'items-center',
    'justify-center',
    'gap-4',
    'my-auto',
    'grow'
  )

  const textContainerClass = classNames('flex', 'flex-col', 'gap-6')

  const imageContainerClass = classNames('rounded-full', 'overflow-hidden')

  return (
    <Paper>
      <div className={wrapperClass}>
        <TitleHeader>Sobre mim</TitleHeader>
        <div className={bodyClass}>
          <div className={textContainerClass}>
            <Paragraph>
              Sou um desenvolvedor front-end que trabalha principalmente com
              React, Redux e TypeScript
            </Paragraph>
            <Paragraph>
              Já trabalhei em projetos desafiadores e aprendi muito com
              profissionais incríveis
            </Paragraph>
            <Paragraph>
              Apaixonado por construir aplicações web que proporcionem boas
              experiências aos usuários e mantenedores do código
            </Paragraph>
            <Paragraph>
              Busco sempre aplicar boas práticas de desenvolvimento, como clean
              code, versionamento de código com Git e testes(unitário,
              integração e e2e)
            </Paragraph>
            <Paragraph>
              Estou sempre em busca de novos desafios e atualizado em relação às
              novas tecnologias e tendências do mercado
            </Paragraph>
            <Button href="/">
              Acesse meu LinkedIn
              <FiExternalLink />
            </Button>
          </div>
          <div className={imageContainerClass}>
            <Image
              src={profilePicture}
              width={450}
              height={450}
              alt="Nícolas Brandão"
            />
          </div>
        </div>
      </div>
    </Paper>
  )
}
