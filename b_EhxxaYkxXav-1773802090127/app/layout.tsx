import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'The Cat Caffé & Ristorant | Where Coffee Meets Comfort',
  description: 'A cozy café experience with handcrafted coffee, delicious food, and relaxing vibes in Civil Lines, Ludhiana. Book your table now!',
  keywords: ['café', 'coffee', 'restaurant', 'Ludhiana', 'cozy', 'aesthetic'],
  openGraph: {
    title: 'The Cat Caffé & Ristorant',
    description: 'Where Coffee Meets Comfort - A premium café experience',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#6B4226',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
