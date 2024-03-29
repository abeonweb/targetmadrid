import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inter"
});

export const metadata = {
  title: 'Target Translations',
  description: 'Traducciones profesionales de documentos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased min-h-screen`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
