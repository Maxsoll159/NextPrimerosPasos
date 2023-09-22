import './globals.css'
import type { Metadata } from 'next'
import { Cinzel } from 'next/font/google'

const inter = Cinzel({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Martin Home Page',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
