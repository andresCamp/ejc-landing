import type { Metadata } from 'next'

import './globals.css'
import NavBar from './(home)/components/NavBar'
import Footer from '@/components/Footer'
import { syne } from '@/lib/fonts'

// const inter = Inter({ subsets: ['latin'] })
// const syne = Syne({ subsets: ['latin'] })
// const questrial = Questrial({ subsets: ['latin']})




export const metadata: Metadata = {
  title: 'Estudio Jorge Campos',
  description: 'Interiors connected to culture',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${syne.className} overflow-x-clip`}>
        {/* <NavBar white={false} /> */}
        {children}
        <Footer />
      </body>
    </html>
  )
}
