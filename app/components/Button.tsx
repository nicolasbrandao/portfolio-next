import classNames from 'classnames'

type Props = {
  href: string
  children: React.ReactNode
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
    'hover:bg-green/[.06]'
  )
  return (
    <a href={href} className={buttonClass}>
      {children}
    </a>
  )
}