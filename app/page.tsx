import classNames from 'classnames'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function Home() {
  const mainClass = classNames('mx-auto', 'w-[50rem]', 'border')
  return (
    <main className={mainClass}>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
