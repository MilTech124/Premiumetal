import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Garáže PREMIUMetal - Nejvyšší kvalita pro vaše potřeby!',
  description: 'Objevte naši nabídku prémiových garáží, které jsou přizpůsobeny vašim potřebám. Spolehněte se na PREMIUMetal!',
  keywords: 'plechová garáž, plechové garáže, plechova garaz, domky na nářadí, zahradní domky na nářadí, zahradní domky na nářadí z polska, kotec pro psa, kotec pro psa hornbach, kotec, přístřešek, přístřešek na dřevo',
  robots: 'index, follow',
  openGraph: {
    images: '/og-image.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className='scroll-smooth' style={{scrollBehavior:'smooth'}}>    
      <body className={inter.className} >
      <Header />
      {children}
      <Footer />
      </body>
    </html>
  )
}

export const revalidate = 3600 // revalidate at most every hour