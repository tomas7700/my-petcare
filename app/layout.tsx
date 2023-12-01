import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { ToasterProvider } from '@/components/toaster-provider'
import { CrispProvider } from '@/crisp-provider'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Pet Care',
  description: 'AI veterinary assistant ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <CrispProvider/>
      <body className={inter.className}>
        
        <ToasterProvider/>
        {children}
        </body>
    </html>
    </ClerkProvider>
  )
}
