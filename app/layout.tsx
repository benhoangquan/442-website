import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'A 442 EVENT - Montreal',
  description: 'Join our next AI community meetup in Montreal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

