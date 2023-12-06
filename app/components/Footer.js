import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div>
       <footer className="bg-gray-800 ">
        <div className="container flex flex-wrap mx-auto py-10 text-white justify-center">
            <div className='pr-10'><img src="/images/logo-white.png" alt="logo" /></div>
            <div className='flex gap-2 flex-col pt-4 mr-auto'>
            <div className='flex items-center gap-5 text-sm'><img src="/images/mail.svg" className="w-12" alt="" /> <Link className='hover:scale-105 transition-all' href="mailto:garaze@premiumetal.pl">garaze@premiumetal.pl</Link></div>
            <div className='flex items-center gap-5 text-sm'><img src="/images/mobile.svg" className="w-12" alt="" /> <Link className='hover:scale-105 transition-all' href="tel:517330176">+48 517330176</Link></div>
            <div className='flex items-center gap-5 text-sm'><img src="/images/mobile.svg" className="w-12" alt="" /> <Link className='hover:scale-105 transition-all' href="tel:665983244">+48 665983244</Link></div>                
            </div>
            <div>
                <h4 className='font-bold'>Godziny Otwarcia</h4>
                <ul className='flex flex-col ml-5 gap-2 pt-4 list-disc'>
                    <li>Poniedziałek - Piątek: 8:00 - 16:00</li>
                    <li>Sobota: 9:00 - 13:00</li>
                    <li>Niedziela: Zamknięte</li>                 
                </ul>
                
                <div className='flex pt-5 gap-5 whitespace-nowrap items-center'>
                <Link href='https://www.facebook.com/PremiuMetal' className='flex gap-2 hover:scale-105 transition-all'><img src="/images/Facebook.svg" alt="" />Facebook</Link>
                <Link href='/' className='flex gap-2 hover:scale-105 transition-all'><img src="/images/info.svg" alt="" />Polityka prywatnosci</Link>

                </div>
            </div>
        </div>

       </footer>
       <div className='text-center text-red-600 bg-primary text-3xl font-bold p-2'>Szybki termin realizacji 14 dni od zamówienia !!!</div>
       <div>
        <div className="bg-red-800">
          <div className="container mx-auto py-2 text-center text-white">
              <p>© 2021 Premiumetal. Wszelkie prawa zastrzeżone.</p>
          </div>
          </div>
       </div>
    </div>
  )
}

export default Footer