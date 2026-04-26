import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sharad Chhunju | Senior QA Engineer',
  description: 'Portfolio of Sharad Chhunju — Senior QA Engineer specializing in test automation, SDET, and quality engineering.',
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
