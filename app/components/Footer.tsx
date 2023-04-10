import classNames from 'classnames'
import { AiOutlineStar } from 'react-icons/ai'
import { BiGitRepoForked } from 'react-icons/bi'
import Brand from './Brand'
import { Ubuntu_Mono } from 'next/font/google'

const ubuntuMono = Ubuntu_Mono({ weight: '400', subsets: ['latin'] })

export default function Footer() {
  const footerContainerClass = classNames(
    'flex',
    'mx-auto',
    'max-w-[50rem]',
    'h-[10rem]',
    'items-center',
    'justify-center',
    'gap-4'
  )

  const footerInfoContainerClass = classNames(
    ubuntuMono.className
  )

  const statsWrapperClass = classNames(
    'flex',
    'gap-4',
    'items-center',
    'justify-center'
  )

  const statsContainerClass = classNames(
    'flex',
    'gap-2',
    'items-center'
  )

  return (
    <footer className={footerContainerClass}>
      <Brand />
      <div className={footerInfoContainerClass}>
        <p>Projetado & Desenvolvido por Nícolas Brandão</p>
        <div className={statsWrapperClass}>
          <div className={statsContainerClass}>
            <AiOutlineStar />
            <p>1</p>
          </div>
          <div className={statsContainerClass}>
            <BiGitRepoForked />
            <p>3</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
