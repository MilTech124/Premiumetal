import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Garáže PREMIUMetal - Najvyššia kvalita pre vaše potreby',
  description: 'Objavte našu ponuku prémiových garáží, ktoré sú prispôsobené vašim potrebám. Spoľahnite sa na PREMIUMetal!',
  keywords: 'plechove garaze, plechova garaz, plechové garáže, plechová garáž, záhradný domček na náradie, domček na náradie, domcek na naradie, koterce pre psov, koterce, prístrešok na drevo, pristresok na drevo',
  robots: 'index, follow',
  openGraph: {
    images: '/og-image.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="cz" className='scroll-smooth' style={{scrollBehavior:'smooth'}}>    
      <body className={inter.className} >
      <Header />
      {children}
      <Footer />
      </body>
    </html>
  )
}

export const revalidate = 3600 // revalidate at most every hour