import classNames from 'classnames'
import Paper from './components/Paper'
import Hero from './components/Hero'
import About from './components/About'

export default function Home() {
  const mainClass = classNames('mx-auto', 'w-[50rem]')
  return (
    <main className={mainClass}>
      <Hero />
      <About />
    </main>
  )
}
