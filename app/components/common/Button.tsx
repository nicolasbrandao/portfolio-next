import classNames from 'classnames'
import { ReactNode } from 'react'
import generalTransition from '../classnames/classNames'

type Props = {
  href: string
  children: ReactNode
}

export default function Button({ href, children }: Props) {
  const buttonClass = classNames(
    'flex',
    'items-center',
    'gap-2',
    'w-fit',
    'rounded',
    'border',
    'p-2',
    'text-green',
    'border-green',
    'hover:bg-green/[.06]',
    generalTransition
  )
  return (
    <a
      href={href}
      className={buttonClass}
      target="_blank"
      rel="noreferrer"
      tabIndex={0}
    >
      {children}
    </a>
  )
}
