import './globals.css'

export const metadata = {
  title: 'Nícolas Brandão - Software Engineer',
  description: 'Página de portfólio pessoal de Nícolas Brandão',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
