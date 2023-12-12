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
      <body className={`${roboto.variable} font-sans`}>{children}</body>
    </html>
  )
}
