import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Garaże PREMIUMetal - Najwyższa Jakość dla Twoich Potrzeb!',
  description: 'Odkryj naszą ofertę garaży klasy premium, dostosowaną do Twoich potrzeb. Zaufaj PREMIUMetal!',
  keywords: 'garaże blaszane, garaże drewnopodobne, garaże akrylowe, kojce, kojce dla psów, garaże premium',
  robots: 'index, follow',
  openGraph: {
    images: '/og-image.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className='scroll-smooth' style={{scrollBehavior:'smooth'}}>    
  <head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=AW-16510752046" strategy="afterInteractive" />
      <Script strategy="afterInteractive" id="gtag-config">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16510752046');
        `}
      </Script>
     
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="1b624268-5ae5-49d9-992c-056c08ec8467"
          type="text/javascript"
        ></Script>
     
    </head>

      <body className={inter.className} >
      <Header />
      {children}
      <Footer />
      </body>
    </html>
  )
}

export const revalidate = 3600 // revalidate at most every hour