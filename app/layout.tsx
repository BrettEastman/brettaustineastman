import './globals.css'
import { Raleway } from 'next/font/google'
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';

const raleway = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'Brett Austin Eastman',
  description: 'Portfolio site of Brett Austin Eastman',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Header />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
