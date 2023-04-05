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

  return <a href='/' className={brandClass}>NB</a>
}
