import classNames from "classnames"
import Paper from "./components/Paper"
import Hero from "./components/Hero"

export default function Home() {
  const mainClass = classNames(
    'mx-auto',
    'w-[50rem]'
  )
  return (
    <main className={mainClass}>
      <Hero />
      <Paper />
      <Paper />
    </main>
  )
}
