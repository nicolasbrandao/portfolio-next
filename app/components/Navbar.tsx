'use client'

import classNames from 'classnames'
import { FiMenu } from 'react-icons/fi'
import { useState, useEffect } from 'react'
import Button from './Button'
import Brand from './Brand'
import ThemeIcon from './ThemeIcon'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 768)

  useEffect(() => {
    const handleWindowResize = () => {
      setIsOpen(window.innerWidth >= 768)
    }

    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [isOpen])

  const handleClick = () => {
    setIsOpen((prev) => !prev)
  }

  const navbarClass = classNames(
    'flex',
    'justify-between',
    'md:items-center',
    'p-4',
    'fixed',
    'top-0',
    'z-10',
    'w-full',
    'backdrop-blur'
  )

  const sideMenuClass = classNames(
    'flex',
    'flex-col',
    'items-end',
    'md:flex-row',
    'md:items-center',
    'gap-4'
  )

  const navbarListClass = classNames(
    'list-none',
    'gap-4',
    'items-end',
    'md:items-center',
    isOpen ? 'flex flex-col md:flex-row' : 'hidden'
  )

  const navbarListItemClass = classNames('cursor-pointer', 'hover:text-green')

  const mobileMenuIconClass = classNames('text-3xl', 'block', 'md:hidden')

  return (
    <nav className={navbarClass}>
      <Brand />
      <div className={sideMenuClass}>
        <FiMenu className={mobileMenuIconClass} onClick={handleClick} />
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
      </div>
    </nav>
  )
}
