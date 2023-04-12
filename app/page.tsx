import classNames from 'classnames'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import SidebarContacts from './components/SidebarContacts'

export default function Home() {
  const mainClass = classNames(
    'mx-auto',
    'w-[22rem]',
    'md:w-[45rem]',
    'xl:w-[50rem]'
  )
  return (
    <main className={mainClass}>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <SidebarContacts />
    </main>
  )
}
