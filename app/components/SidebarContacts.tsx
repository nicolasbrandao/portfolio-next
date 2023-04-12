import classNames from 'classnames'
import { SlSocialLinkedin } from 'react-icons/sl'
import { BsGithub } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { SiNotion } from 'react-icons/si'
import { FaWhatsapp } from 'react-icons/fa'

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

  const contactsListItemClass = classNames('text-2xl', 'hover:text-green')
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
          <HiOutlineMail />
        </li>
        <li className={contactsListItemClass}>
          <FaWhatsapp />
        </li>
        <li className={contactsListItemClass}>
          <SlSocialLinkedin />
        </li>
        <li className={contactsListItemClass}>
          <BsGithub />
        </li>

        <li className={contactsListItemClass}>
          <SiNotion />
        </li>
      </ul>
      <div className={contactsLineClass} />
    </div>
  )
}
