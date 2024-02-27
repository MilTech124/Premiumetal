"use client"
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import HomeIcon from '../components/home/HomeIcon'



function Header() {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='sticky top-0 z-50 flex w-full bg-red md:h-[80px] '>

    <div className='mx-auto container flex w-full pr-5 min-h-[50px] justify-between items-center max-md:flex-col text-white shadow-xl '>
       <img src="/PREMIUM.jpg" alt="logo" className='w-[80px] max-sm:absolute left-0 max-sm:w-[50px] ' />
        <nav className='md:ml-auto md:pr-4 md:!flex'style={{ display: isOpen ? "flex" : "none" }}>
            <ul className='md:flex text-xl max-sm:flex-col max-sm:flex max-sm:gap-2 items-center  gap-10 font-semibold max-md:justify-center'>
                <li onClick={()=>{setIsOpen(false)}}> <Link href="/" ><HomeIcon/></Link></li>
                <li onClick={()=>{setIsOpen(false)}}> <Link href="/galeria">Galéria</Link></li>
                <li onClick={()=>{setIsOpen(false)}}> <Link href="/smietniki">Szeméttároló fészer</Link></li>
                <li onClick={()=>{setIsOpen(false)}}> <Link href="/#ofirmie"> A cégről</Link></li>
                {/* ON HOVER DROPDOWN */}
                <li className='relative group'>Útmutató
                <div className='absolute opacity-0 hidden text-sm group-hover:flex  group-hover:opacity-100 top-7 -left-5 bg-red w-[150px] '>
                    <ul className='flex flex-col gap-5 p-5'>
                        <li onClick={()=>{setIsOpen(false)}}> <Link href="/akcesoria">További Tartozékok</Link></li>
                        <li onClick={()=>{setIsOpen(false)}}> <Link href="/przygotowanie-podloza">Talaj előkészítése</Link></li>
                        <li onClick={()=>{setIsOpen(false)}}> <Link href="/paleta-kolorow">Színpaletta</Link></li>
                        <li onClick={()=>{setIsOpen(false)}}> <Link href="/informacje">Információk</Link></li>
                    </ul>
                </div>                  
                    
                 

                </li>          
                <li> <Link href="/kontakt">Kapcsolat</Link></li>

            </ul>
        </nav>
        <div className='overflow-hidden hover:overflow-visible max-sm:flex hover:max-h-full transition-all h-7'>
        <a href="https://premiumetal.hu" ><img className='w-10 p-2 hover:scale-110 transition hover:rotate-6' src="/hu.webp" alt="hu" /></a>
        <a href="https://premiumetal.pl" ><img className='w-10 p-2 hover:scale-110 transition hover:rotate-6' src="/pl.webp" alt="pl" /></a>
        <a href="https://premiumetal.cz" ><img className='w-10 p-2 hover:scale-110 transition hover:rotate-6' src="/cz.webp" alt="cz" /></a>
        <a href="https://premiumetal.sk" ><img className='w-10 p-2 hover:scale-110 transition hover:rotate-6' src="/sk.webp" alt="sk" /></a>
        </div>
        <div className='socials top-3 max-sm:left-6 md:right-6 md max-sm:py-2 md:pr-5 md:!flex' style={{ display: isOpen ? "flex" : "none" }}>
            <Link href='https://www.facebook.com/PremiuMetal'><img className='hover:cursor-pointer w-10 hover:scale-110' src="/facebook.png" alt="facebook" /></Link>  
        </div>

        <button onClick={()=>setIsOpen(!isOpen)} className="btn absolute top-5 right-5 btn-square btn-ghost md:invisible">
        {isOpen ? "X" : "☰"}
          
        </button>
    </div>

        
    </div>
  )
}

export default Header