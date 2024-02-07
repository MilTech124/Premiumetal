"use client"
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import HomeIcon from '../components/home/HomeIcon'



function Header() {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='sticky top-0 z-50 flex w-full bg-red md:h-[80px] '>

    <div className='mx-auto container flex w-full pr-5 justify-between items-center max-md:flex-col text-white shadow-xl '>
       <img src="/PREMIUM.jpg" alt="logo" className='w-[80px]' />
        <nav className='md:ml-auto md:pr-4 md:!flex'style={{ display: isOpen ? "flex" : "none" }}>
            <ul className='md:flex text-xl max-sm:flex-col max-sm:flex max-sm:gap-2 items-center  gap-10 font-semibold max-md:justify-center'>
                <li onClick={()=>{setIsOpen(false)}}> <Link href="/" ><HomeIcon/></Link></li>
                <li onClick={()=>{setIsOpen(false)}}> <Link href="/galeria">Galeria</Link></li>
                <li onClick={()=>{setIsOpen(false)}}> <Link href="/smietniki">Wiaty Śmietnikowe</Link></li>
                <li onClick={()=>{setIsOpen(false)}}> <Link href="/#ofirmie">O firmie</Link></li>
                {/* ON HOVER DROPDOWN */}
                <li className='relative group'>Poradnik
                <div className='absolute opacity-0 hidden text-sm group-hover:flex  group-hover:opacity-100 top-7 -left-5 bg-red w-[150px] '>
                    <ul className='flex flex-col gap-5 p-5'>
                        <li onClick={()=>{setIsOpen(false)}}> <Link href="/akcesoria">Dodatkowe akcesoria</Link></li>
                        <li onClick={()=>{setIsOpen(false)}}> <Link href="/przygotowanie-podloza">Przygotowanie podłoża</Link></li>
                        <li onClick={()=>{setIsOpen(false)}}> <Link href="/paleta-kolorow">Paleta kolorów</Link></li>
                        <li onClick={()=>{setIsOpen(false)}}> <Link href="/informacje">Informacje</Link></li>
                    </ul>
                </div>                  
                    
                 

                </li>          
                <li> <Link href="/kontakt">Kontakt</Link></li>

            </ul>
        </nav>
        <div className='socials max-sm:hidden max-sm:py-2 md:pr-5'>
            <Link href='https://www.facebook.com/PremiuMetal'><img className='hover:cursor-pointer w-10 hover:scale-110' src="/facebook.png" alt="facebook" /></Link>
        </div>
        <button onClick={()=>setIsOpen(!isOpen)} className="btn btn-square btn-ghost md:invisible">
        {isOpen ? "X" : "☰"}
          
        </button>
    </div>

        
    </div>
  )
}

export default Header