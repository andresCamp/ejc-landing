// import type { Metadata } from 'next'
// import { Inter, Questrial, Syne } from 'next/font/google'
// import '../globals.css'
// import NavBar from './components/NavBar'



// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

// const syne = Syne({ subsets: ['latin'], variable:'--font-syne', weight: ['400','500', '700'] })
// const questrial = Questrial({ subsets: ['latin'], variable:'--font-questrial', weight: ['400'] })


// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//         <body className={`${syne.variable} ${questrial.variable}`}>
//           <NavBar />
//           {children}
//         </body>
//     </html>
//   )
// }