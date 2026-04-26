import type { Metadata } from 'next'
import './globals.css'
import { profile } from '@/data/profile'
import { links } from '@/data/links'

const siteUrl = "https://schhunju.github.io"
const description = `Portfolio of ${profile.name} — ${profile.title} specializing in test automation, SDET, and quality engineering.`

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.title}`,
  description,
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${profile.name} | ${profile.title}`,
    description,
    siteName: `${profile.brandName}${profile.brandSuffix}`,
    images: [{ url: "/avatar.png", width: 800, height: 800, alt: profile.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | ${profile.title}`,
    description,
    images: ["/avatar.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  authors: [{ name: profile.name, url: links.linkedin }],
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
