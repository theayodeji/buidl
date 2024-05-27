import { Inter } from 'next/font/google'
import './globals.scss'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next App',
  description: 'Next.js starter app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{width: '100%'}}>
        <Navbar />
        <div className='container'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}