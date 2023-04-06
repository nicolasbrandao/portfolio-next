import classNames from 'classnames'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'

export default function Home() {
  const mainClass = classNames('mx-auto', 'w-[50rem]')
  return (
    <main className={mainClass}>
      <Hero />
      <About />
      <Skills />
    </main>
  )
}
