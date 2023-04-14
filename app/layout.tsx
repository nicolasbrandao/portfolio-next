import './globals.css'
import classNames from 'classnames'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import Head from 'next/head'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PreLoader from './components/PreLoader'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nícolas Brandão - Software Engineer',
  description: 'Página de portfólio pessoal de Nícolas Brandão',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const bodyClass = classNames('bg-bcg1', 'text-frg1', inter.className)

  return (
    <html lang="pt-br" className="dark">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta
          name="apple-mobile-web-app-title"
          content="N&iacute;colas Brand&atilde;o - Software Engineer"
        />
        <meta
          name="application-name"
          content="N&iacute;colas Brand&atilde;o - Software Engineer"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body className={bodyClass}>
        <Navbar />
        {children}
        <Footer />
        <PreLoader />
      </body>
    </html>
  )
}
