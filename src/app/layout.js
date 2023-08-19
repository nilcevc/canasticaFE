import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Canastica',
  description: ' ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="flex items-center justify-center h-14 p-10  bg-gradient-to-r from-pink-400 to-pink-600 shadow-xl">
        <h1 className="font-conforta font-semibold text-4xl">Canas<a className="text-white">Tica</a></h1>
      </div>
        {children}
        </body>
    </html>
  )
}
