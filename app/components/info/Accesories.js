import React from 'react'

function Accesories() {
  return (
    <div className='container mx-auto pt-40 w-full p-3'>
        <h2 className='text-5xl' >Akcesoria Garażu</h2>
        <div className='flex max-sm:flex-col'>
            <div className='md:w-1/2 pt-10 max-sm:order-2'>
               <h4>1. Brama, posiadamy obecnie 2 rodzaje bram </h4>
               <p>- uchylna </p>
               <p>- na boki </p>
               <h4 className='pt-2'>2. Drzwi w róznych kolorach wraz z osprzętem</h4>
               <p>- prawe</p>
               <p>- lewe</p>
                <h4 className='pt-2'>3. Obróbka tzw. opierzenie</h4>
                <p>-kolor można dobrać pod garaż lub całkowicie inny</p>
                <h4 className='pt-2'>4. Okna</h4>
                <p>-60x100</p>
                <p>-80x100</p> 
                <h4 className='pt-2'>5. Rynny PCV</h4>
                <h4 className='pt-4'>Filc antykondensacyjny</h4>
                <img src="/images/filc.jpg" alt="" />
                <h4 className='pt-4'>Automaty do bram</h4>
                <img src="/images/automat.png" alt="" />



            </div>
            <img src="/images/garaz-pt.png" className='w-full h-full max-sm:order-1' alt="" />
        </div>
    </div>
  )
}

export default Accesories