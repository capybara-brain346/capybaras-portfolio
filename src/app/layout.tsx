import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import InteractiveBackground from '@/components/InteractiveBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Oskar Frantti Glen',
  description: 'Full Stack Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <InteractiveBackground>
          {children}
        </InteractiveBackground>
      </body>
    </html>
  )
}