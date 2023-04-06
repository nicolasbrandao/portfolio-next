import { PropsWithChildren } from 'react'
import classNames from 'classnames'

export default function Paragraph({ children }: PropsWithChildren) {
  const paragraphClass = classNames(
    'before:content-["⧎"]',
    'before:text-green',
    'before:mr-2'
  )
  return <p className={paragraphClass}>{children}</p>
}
