import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from './Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Esports FTW',
  description: 'Esports FTW, A  platform for esports fans',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
