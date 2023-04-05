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
    'sticky',
    'top-0',
    'z-10',
    'border'
  )

  const navbarListClass = classNames('list-none', 'flex', 'gap-4')
  const navbarListItemClass = classNames('cursor-pointer', 'hover:text-green')

  return (
    <nav className={navbarClass}>
      <Brand />
      <ul className={navbarListClass}>
        <li className={navbarListItemClass}><ThemeIcon /></li>
        <li className={navbarListItemClass}>Home</li>
        <li className={navbarListItemClass}>Sobre mim</li>
        <li className={navbarListItemClass}>Skills</li>
        <li className={navbarListItemClass}>Projetos</li>
        <li className={navbarListItemClass}>Contato</li>
        <li className={navbarListItemClass}>
          <Button href="#">Currículo</Button>
        </li>
      </ul>
    </nav>
  )
}
