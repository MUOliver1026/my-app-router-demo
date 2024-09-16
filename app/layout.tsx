import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'App Router Demo',
  description: 'A demo of Next.js App Router',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-gray-800 p-4">
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-white hover:text-gray-300">Home</Link>
            </li>
            <li>
              <Link href="/about" className="text-white hover:text-gray-300">About</Link>
            </li>
            <li>
              <Link href="/posts/1" className="text-white hover:text-gray-300">Sample Post</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}