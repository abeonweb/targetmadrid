import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ["400", "700"],
  variable: "--font-roboto"
})

export const metadata = {
  title: 'Target Translations',
  description: 'Traducciones profesionales de documentos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-sans min-h-screen`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
