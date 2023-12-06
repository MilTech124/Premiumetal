'use client'
import SmallItem from './ItemSmall'
import { Fade } from 'react-awesome-reveal'


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
    <div className='flex justify-evenly md:mt-[-250px] flex-wrap'>
        {items.map((item)=>(
            <Fade key={item.number} delay={item.number*100}>
             <SmallItem key={item.number} number={item.number} title={item.title} image={item.image} />
            </Fade>
          
        ))
        }
    </div>
  )
}

export default ItemsSmallContainer