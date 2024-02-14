'use client'
import SmallItem from './ItemSmall'
import { Fade } from 'react-awesome-reveal'


function ItemsSmallContainer() {
    const items = [
        {
            number:"1",
            title:"Nabídka zdarma",
            image:"/images/kontakt2.png",
        },
        {
            number:"2",
            title:"Doručení zdarma",
            image:"/images/dostawa.png",
        },
        {
            number:"3",
            title:"Instalace zdarma",
            image:"/images/zamowienie2.png",
        },
      
    ]
  return (
    <div className='flex justify-evenly md:mt-[-150px] pl-4 '>
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