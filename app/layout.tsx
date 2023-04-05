import './globals.css'
import classNames from 'classnames'
import Navbar from './components/Navbar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nícolas Brandão - Software Engineer',
  description: 'Página de portfólio pessoal de Nícolas Brandão',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bodyClass = classNames('bg-bcg1', 'text-frg1')

  return (
    <html lang="pt-br" className={inter.className}>
      <body className={bodyClass}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
