import React, { ReactNode } from 'react'
import classNames from 'classnames'

type PaperProps = {
  children: ReactNode
  id?: string
}

export default function Paper({ children, id }: PaperProps) {
  const paperClass = classNames('flex', 'flex-col', 'min-h-screen', 'pt-20')
  return (
    <section id={id} className={paperClass}>
      {children}
    </section>
  )
}
