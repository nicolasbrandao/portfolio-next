import classNames from 'classnames'

export default function Brand() {
  const brandClass = classNames(
    'font-bold',
    'text-4xl',
    'before:content-["<"]',
    'before:text-green',
    'before:text-4xl',
    'after:content-["/>"]',
    'after:text-green',
    'after:text-4xl',
    'cursor-pointer'
  )

  return (
    <a href="/" className={brandClass} tabIndex={0} aria-label="Brand">
      NB
    </a>
  )
}
