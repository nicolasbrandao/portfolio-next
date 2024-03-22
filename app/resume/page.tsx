import classNames from 'classnames'
import Resume from '../components/Resume'

export default function Home() {
  const mainClass = classNames('mx-auto', 'mt-[100px]')

  return (
    <main className={mainClass}>
      <Resume />
    </main>
  )
}
