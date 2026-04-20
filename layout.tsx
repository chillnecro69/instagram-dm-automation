import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Instagram DM Automation - AutoDM Pro',
  description: 'Automate your Instagram DMs, respond to comments instantly, and capture leads 24/7',
  keywords: ['Instagram automation', 'DM automation', 'Instagram marketing', 'Creator tools'],
  authors: [{ name: 'AutoDM Pro' }],
  creator: 'AutoDM Pro',
  publisher: 'AutoDM Pro',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}
