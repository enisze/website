import DotPattern from '@/components/DotPattern'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { BASE_URL } from '../../config'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Enis Zejnilovic Full-stack Software Developer - Portfolio',
  description: `Portfolio of Enis Zejnilovic, a skilled Full-stack software engineer, with experience in web development. Specialized in React, TypeScript, and Next.js.`,
  openGraph: {
    title: 'Enis Zejnilovic Full-stack Software Developer - Portfolio',
    url: 'https://enis.dev',
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/images/preview.png`,
        alt: 'Enis Zejnilovic Portfolio Screenshot'
      }
    ]
  },
  twitter: {
    creator: '@enis_zejnilovic',
    title: 'Enis Zejnilovic Full-stack Software Developer - Portfolio',
    description: `Portfolio of Enis Zejnilovic, a skilled Full-stack software engineer, with experience in web development. Specialized in React, TypeScript, and Next.js.`,
    card: 'summary_large_image',
    images: [
      {
        alt: 'Portfolio Website Screenshot',
        url: `${BASE_URL}/images/preview.png`
      }
    ]
  },
  keywords: [
    'Portfolio',
    'enis zejnilovic',
    'software engineer',
    'project manager',
    'skills',
    'development',
    'focused',
    'areas',
    'new',
    'TypeScript',
    'NodeJS',
    'ReactJS',
    'NextJS'
  ]
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <title>Enis Zejnilovic Portfolio</title>
      </head>

      <body className='dark:bg-slate-800 text-black dark:text-white flex flex-col'>
        <div className='fixed w-full z-20'>
          <Navbar />
        </div>
        <div className='py-24 px-8'>
          <DotPattern
            className={cn(
              '[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]',
              'absolute h-screen -z-10'
            )}
          />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
