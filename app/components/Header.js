"use client"
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'

function Header() {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='absolute flex w-full justify-end  md:h-[80px] text-stone-900'>

    <div className='bg-primary flex md:w-[60%] p-1 px-5 justify-between items-center max-md:flex-col'>
        <img src="/logo.png" alt="logo" className='w-[75px]' />
        <nav className='ml-auto pr-4 md:!flex'style={{ display: isOpen ? "flex" : "none" }}>
            <ul className='md:flex max-sm:flex-col max-sm:flex max-sm:gap-2  gap-5 font-semibold max-md:justify-center'>
                <li> <Link href="/">Strona główna</Link></li>
                <li> <Link href="/galeria">Galeria</Link></li>
                <li> <Link href="/o-firmie">O firmie</Link></li>
                <li> <Link href="/informacje">Informacje</Link></li>
                <li> <Link href="/kontakt">Kontakt</Link></li>

            </ul>
        </nav>
        <div className='socials pr-5'>
            <img className='hover:cursor-pointer hover:scale-110' src="/Facebook.svg" alt="" />
        </div>
        <button onClick={()=>setIsOpen(!isOpen)} className="btn btn-square btn-ghost md:invisible">
        {isOpen ? "X" : "☰"}
          
        </button>
    </div>

        
    </div>
  )
}

export default Header