import './globals.css'
import classNames from 'classnames'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PreLoader from './components/PreLoader'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nícolas Brandão - Software Engineer',
  description: 'Página de portfólio pessoal de Nícolas Brandão',
  colorScheme: 'dark',
  icons: {
    icon: { url: '/favicon/favicon.ico' },
    shortcut: { url: '/favicon/favicon.ico' },
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const bodyClass = classNames('bg-bcg1', 'text-frg1', inter.className)

  return (
    <html lang="pt-br" className="dark">
      <body className={bodyClass}>
        <Navbar />
        {children}
        <Footer />
        <PreLoader />
      </body>
    </html>
  )
}
