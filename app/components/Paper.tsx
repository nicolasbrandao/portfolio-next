import { PropsWithChildren } from 'react'
import classNames from 'classnames'

export default function Paper({ children }: PropsWithChildren) {
  const paperClass = classNames('flex', 'flex-col', 'min-h-screen', 'pt-20')
  return <section className={paperClass}>{children}</section>
}
