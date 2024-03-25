import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PREMIUMETAL',
  description: 'Garaże Klasy Premium',
  keywords: 'garaże blaszane, garaże, blaszaki,kojce, kojce dla psów, kojce dla psów blaszane',
  openGraph: {
    images: '/og-image.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className='scroll-smooth' style={{scrollBehavior:'smooth'}}>    
    <head>
      <script dangerouslySetInnerHTML={{ __html: `
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-16510752046">
</script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-16510752046');
</script>` }} />


    </head>

      <body className={inter.className} >
      <Header />
      {children}
      <Footer />
      </body>
    </html>
  )
}
