import type { Metadata } from 'next'
import './globals.css'
import { profile } from '@/data/profile'

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.title}`,
  description: `Portfolio of ${profile.name} — ${profile.title} specializing in test automation, SDET, and quality engineering.`,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
