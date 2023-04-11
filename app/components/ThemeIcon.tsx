import classNames from 'classnames'
import { MdLightMode } from 'react-icons/md'

export default function ThemeIcon() {
  const iconClass = classNames('text-2xl', 'cursor-pointer')

  return <MdLightMode className={iconClass} />
}
