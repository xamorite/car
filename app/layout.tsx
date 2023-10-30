import type { Metadata } from 'next'
import {Footer,Navbar} from '@/components'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cars',
  description: 'Give your trip a smooth experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
