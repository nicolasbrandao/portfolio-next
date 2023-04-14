'use client'

import classNames from 'classnames'
import { FiMenu } from 'react-icons/fi'
import { useState, useEffect, useRef } from 'react'
import Button from './Button'
import Brand from './Brand'
import ThemeIcon from './ThemeIcon'
import linksURLs from '../constants/hyperlinks'
import generalTransition from './classnames/classNames'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const ulRef = useRef<HTMLUListElement | null>(null)

  useEffect(() => {
    const handleWindowResize = () => {
      setIsOpen(window.innerWidth >= 768)
    }

    setIsOpen(window.innerWidth >= 768)

    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  const handleClick = () => {
    setIsOpen((prev) => !prev)
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!ulRef.current || !ulRef.current?.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isOpen, ulRef])

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
    'md:flex',
    'md:flex-row',
    isOpen ? 'flex flex-col' : 'hidden'
  )

  const navbarListItemClass = classNames(
    'cursor-pointer',
    'hover:text-green',
    generalTransition
  )

  const mobileMenuIconClass = classNames(
    'text-3xl',
    'block',
    'md:hidden',
    'hover:text-green',
    'cursor-pointer',
    generalTransition
  )

  return (
    <nav className={navbarClass}>
      <Brand />
      <div className={sideMenuClass}>
        <FiMenu className={mobileMenuIconClass} onClick={handleClick} />
        <ul ref={ulRef} className={navbarListClass}>
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
            <Button href={linksURLs.resume}>Currículo</Button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
