import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './component/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Beginners React Class',
  description: 'Frontend 6b6 class 1 on React',
  keywords: 'React, Next, JavaScript'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div classroom= 'min-h-[70vh]'>
        {children}

        </footer>
        </body>
    </html>
  )
}
