import classNames from 'classnames'
import { SlSocialLinkedin } from 'react-icons/sl'
import { BsGithub, BsWhatsapp } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'
import { SiNotion } from 'react-icons/si'
import linksURLs from '../constants/hyperlinks'

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

  const contactsListClass = classNames('flex', 'flex-col', 'gap-2')

  const contactsListItemClass = classNames(
    'text-2xl',
    'text-frg2',
    'hover:text-green'
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
          <a href={linksURLs.email} target="_blank" rel="noreferrer">
            <FiMail />
          </a>
        </li>
        <li className={contactsListItemClass}>
          <a href={linksURLs.whatsapp} target="_blank" rel="noreferrer">
            <BsWhatsapp />
          </a>
        </li>
        <li className={contactsListItemClass}>
          <a href={linksURLs.linkedin} target="_blank" rel="noreferrer">
            <SlSocialLinkedin />
          </a>
        </li>
        <li className={contactsListItemClass}>
          <a href={linksURLs.github} target="_blank" rel="noreferrer">
            <BsGithub />
          </a>
        </li>

        <li className={contactsListItemClass}>
          <a href={linksURLs.notion} target="_blank" rel="noreferrer">
            <SiNotion />
          </a>
        </li>
      </ul>
      <div className={contactsLineClass} />
    </div>
  )
}
