import classNames from 'classnames'
import { useState, KeyboardEventHandler } from 'react'
import { MdLightMode, MdDarkMode } from 'react-icons/md'

export default function ThemeIcon() {
  const [themeIsDark, setThemeIsDark] = useState(true)

  const handleThemeToggle = () => {
    const documentClass = document.documentElement.classList
    documentClass.toggle('light')
    setThemeIsDark((prev) => !prev)
  }

  const handleKeyPress: KeyboardEventHandler<SVGElement> = (e) => {
    if (e.key === 'Enter') {
      handleThemeToggle()
    }
  }

  const iconClass = classNames('text-2xl', 'cursor-pointer')

  return themeIsDark ? (
    <MdLightMode
      className={iconClass}
      onClick={handleThemeToggle}
      onKeyDown={handleKeyPress}
      tabIndex={0}
      aria-label="Light mode"
    />
  ) : (
    <MdDarkMode
      className={iconClass}
      onClick={handleThemeToggle}
      onKeyDown={handleKeyPress}
      tabIndex={0}
      aria-label="Dark mode"
    />
  )
}
