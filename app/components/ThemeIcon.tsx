import classNames from 'classnames'
import { useState } from 'react'
import { MdLightMode, MdDarkMode } from 'react-icons/md'

export default function ThemeIcon() {
  const [themeIsDark, setThemeIsDark] = useState(true)

  const handleThemeToggle = () => {
    const documentClass = document.documentElement.classList
    documentClass.toggle('light')
    setThemeIsDark((prev) => !prev)
  }

  const iconClass = classNames('text-2xl', 'cursor-pointer')

  return themeIsDark ? (
    <MdLightMode className={iconClass} onClick={handleThemeToggle} />
  ) : (
    <MdDarkMode className={iconClass} onClick={handleThemeToggle} />
  )
}
