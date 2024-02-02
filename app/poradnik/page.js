import React from 'react'
import Hero from '../components/galeria/Hero'
import Accesories from '../components/info/Accesories'
import Colours from '../components/home/Colours'
import Link from 'next/link'
import Terrain from '../components/info/Terrain'

function page() {
  return (
    <div className='mx-auto bg-white'>
        <Hero title='Informacje' />
        <div className='flex gap-5 justify-center -mt-[200px] z-30'>
            <button className='btn'><Link href="#akcesoria">Akcesoria</Link></button>
            <button className='btn'><Link href="#kolory">Kolorystyka</Link></button>
            <button className='btn'><Link href="#podloze">Podłoże</Link></button>
        </div>

        <div id='akcesoria'><Accesories /></div>
        <div id='kolory' className='bg-[#F9F9F8] '> <Colours /></div>
        <div id='podloze'><Terrain/></div>

       

    </div>
  )
}

export default page