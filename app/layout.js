import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Garáže PREMIUMetal - Nejvyšší kvalita pro vaše potřeby',
  description: 'Objevte naši nabídku prémiových garáží, které jsou přizpůsobeny vašim potřebám. Spolehněte se na PREMIUMetal!',
  keywords: 'plechová garáž, plechové garáže, plechova garaz, domky na nářadí, zahradní domky na nářadí, zahradní domky na nářadí z polska, kotec pro psa, kotec pro psa hornbach, kotec, přístřešek, přístřešek na dřevo',
  robots: 'index, follow',
  openGraph: {
    images: '/og-image.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="sk" className='scroll-smooth' style={{scrollBehavior:'smooth'}}>    
      <body className={inter.className} >
      <Header />
      <Script src="https://www.googletagmanager.com/gtag/js?id=AW-16510752046" strategy="afterInteractive" />
        <Script id="gtag-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-16510752046');
          `}
        </Script>
        <Script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="f3aeaac7-50aa-4999-af8a-4439f9bdc221"  type="text/javascript"></Script>
      {children}
      <Footer />
      </body>
    </html>
  )
}

export const revalidate = 3600 // revalidate at most every hour