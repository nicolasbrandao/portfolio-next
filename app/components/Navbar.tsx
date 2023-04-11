import classNames from 'classnames'
import Button from './Button'
import Brand from './Brand'
import ThemeIcon from './ThemeIcon'

export default function Navbar() {
  const navbarClass = classNames(
    'flex',
    'justify-between',
    'items-center',
    'p-4',
    'fixed',
    'top-0',
    'z-10',
    'w-full',
    'backdrop-blur'
  )

  const navbarListClass = classNames(
    'list-none',
    'flex',
    'gap-4',
    'items-center'
  )
  const navbarListItemClass = classNames('cursor-pointer', 'hover:text-green')

  return (
    <nav className={navbarClass}>
      <Brand />
      <ul className={navbarListClass}>
        <li className={navbarListItemClass}>
          <ThemeIcon />
        </li>
        <li className={navbarListItemClass}>
          <a href="#home">Home</a>
        </li>
        <li className={navbarListItemClass}>
          <a href="#about">Sobre mim</a>
        </li>
        <li className={navbarListItemClass}>
          <a href="#skills">Skills</a>
        </li>
        <li className={navbarListItemClass}>
          <a href="#projects">Projetos</a>
        </li>
        <li className={navbarListItemClass}>
          <a href="#contact">Contato</a>
        </li>
        <li className={navbarListItemClass}>
          <Button href="#">Currículo</Button>
        </li>
      </ul>
    </nav>
  )
}
