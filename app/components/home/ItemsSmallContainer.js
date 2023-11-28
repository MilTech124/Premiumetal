import React from 'react'
import SmallItem from './ItemSmall'


function ItemsSmallContainer() {
    const items = [
        {
            number:"1",
            title:"Kontakt",
            image:"/images/kontakt.png",
        },
        {
            number:"2",
            title:"Wycena",
            image:"/images/wycena.png",
        },
        {
            number:"3",
            title:"Zamówienie",
            image:"/images/zamowienie.png",
        },
        {
            number:"4",
            title:"Produkcja",
            image:"/images/produkcja.png",
        },
        {
            number:"5",
            title:"Montaż",
            image:"/images/montaz.png",
        }
    ]
  return (
    <div className='flex justify-evenly md:mt-[-150px] flex-wrap'>
        {items.map((item)=>(
            <SmallItem key={item.number} number={item.number} title={item.title} image={item.image} />
        ))
        }
    </div>
  )
}

export default ItemsSmallContainer