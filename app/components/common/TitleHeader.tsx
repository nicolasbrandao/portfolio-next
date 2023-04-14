import { PropsWithChildren } from 'react'
import classNames from 'classnames'
import { Ubuntu_Mono } from 'next/font/google'

const ubuntuMono = Ubuntu_Mono({ weight: '400', subsets: ['latin'] })

export default function TitleHeader({ children }: PropsWithChildren) {
  const titleContainerClass = classNames(
    'flex',
    'relative',
    'top-0',
    'justify-between',
    'items-center',
    'w-full',
    'mb-4'
  )
  const titleClass = classNames(
    'text-2xl',
    'text-blue',
    'font-bold',
    'before:content-["<"]',
    'before:text-frg1',
    'after:content-["/>"]',
    'after:text-frg1',
    ubuntuMono.className
  )
  const dividerClass = classNames('border-b', 'border-green', 'w-1/2')

  return (
    <div className={titleContainerClass}>
      <h1 className={titleClass}>{children}</h1>
      <div className={dividerClass} />
    </div>
  )
}
