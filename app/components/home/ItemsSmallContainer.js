'use client'
import SmallItem from './ItemSmall'
import { Fade } from 'react-awesome-reveal'


function ItemsSmallContainer() {
    const items = [
        {
            number:"1",
            title:"Darmowa wycena",
            image:"/images/kontakt2.png",
        },
        {
            number:"2",
            title:"Darmowa dostawa",
            image:"/images/dostawa.png",
        },
        {
            number:"3",
            title:"Darmowy montaż",
            image:"/images/zamowienie2.png",
        },
      
    ]
  return (
    <div className='flex max-sm:flex-col md:justify-evenly md:mt-[-150px] md:pl-4 '>
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