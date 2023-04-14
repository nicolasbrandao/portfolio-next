import classNames from 'classnames'
import { SlSocialLinkedin } from 'react-icons/sl'
import { BsGithub, BsWhatsapp } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'
import { SiNotion } from 'react-icons/si'
import linksURLs from '../constants/hyperlinks'
import generalTransition from './classnames/classNames'

export default function SidebarContacts() {
  const contactsContainerClass = classNames(
    'xl:flex',
    'flex-col',
    'gap-2',
    'px-2',
    'fixed',
    'bottom-0',
    'left-0',
    'items-center',
    'hidden',
    'ml-2'
  )

  const contactsListClass = classNames('flex', 'flex-col', 'gap-3')

  const contactsListItemClass = classNames(
    'text-2xl',
    'text-frg2',
    'hover:text-green',
    generalTransition,
    'hover:animate-float'
  )
  const contactsLineClass = classNames(
    'border-r',
    'h-72',
    'w-0',
    'border-green'
  )

  return (
    <div className={contactsContainerClass}>
      <ul className={contactsListClass}>
        <li className={contactsListItemClass}>
          <a
            href={linksURLs.email}
            target="_blank"
            rel="noreferrer"
            aria-label="Email"
          >
            <FiMail />
          </a>
        </li>
        <li className={contactsListItemClass}>
          <a
            href={linksURLs.whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label="Whatsapp"
          >
            <BsWhatsapp />
          </a>
        </li>
        <li className={contactsListItemClass}>
          <a
            href={linksURLs.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <SlSocialLinkedin />
          </a>
        </li>
        <li className={contactsListItemClass}>
          <a
            href={linksURLs.github}
            target="_blank"
            rel="noreferrer"
            aria-label="Github"
          >
            <BsGithub />
          </a>
        </li>

        <li className={contactsListItemClass}>
          <a
            href={linksURLs.notion}
            target="_blank"
            rel="noreferrer"
            aria-label="Notion"
          >
            <SiNotion />
          </a>
        </li>
      </ul>
      <div className={contactsLineClass} />
    </div>
  )
}
