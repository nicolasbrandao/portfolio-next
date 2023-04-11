import classNames from 'classnames'
import {
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiStyledcomponents,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiPython,
  SiDjango,
} from 'react-icons/si'
import { Ubuntu_Mono } from 'next/font/google'
import icons from '../constants/skillsIcons'

const ubuntuMono = Ubuntu_Mono({ weight: '400', subsets: ['latin'] })

export default function SkillsIcons() {
  const iconElements = [
    <SiReact name="SiReact" />,
    <SiRedux name="SiRedux" />,
    <SiNextdotjs name="SiNextdotjs" />,
    <SiTypescript name="SiTypescript" />,
    <SiStyledcomponents name="SiStyledcomponents" />,
    <SiTailwindcss name="SiTailwindcss" />,
    <SiJavascript name="SiJavascript" />,
    <SiHtml5 name="SiHtml5" />,
    <SiCss3 name="SiCss3" />,
    <SiGit name="SiGit" />,
    <SiPython name="SiPython" />,
    <SiDjango name="SiDjango" />,
  ]
  const containerClass = classNames('flex', 'flex-wrap')

  const skillCardClass = classNames(
    'flex',
    'flex-col',
    'justify-center',
    'items-center',
    'text-green',
    'w-full',
    'my-[1rem]',
    'sm:w-1/2',
    'md:w-1/3'
  )

  const iconClass = classNames('text-8xl')

  const titleClass = classNames(ubuntuMono.className)

  return (
    <div className={containerClass}>
      {iconElements.map((item) => {
        const iconName = item.props.name
        const iconTitle = icons.find((icon) => icon.id === iconName)?.title
        return (
          <div key={iconName} className={skillCardClass}>
            <div className={iconClass}>{item}</div>
            <p className={titleClass}>{iconTitle}</p>
          </div>
        )
      })}
    </div>
  )
}
