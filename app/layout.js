import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

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
      <body className={inter.className} >
      <Header />
      {children}
      <Footer />
      </body>
    </html>
  )
}

export const revalidate = 3600 // revalidate at most every hour