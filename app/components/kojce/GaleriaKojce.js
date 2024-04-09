import React from 'react'
import axios from 'axios'
import ItemRealization from '../home/ItemRealization';

const getData = async () =>{  
  try {    
    const data = await axios.get(process.env.NEXT_PUBLIC_HOST + "?slug=kojce"); 
    return data.data[0];    
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function index() {
  const data = await getData()
  
  return (
    <div>
      <div className='flex justify-center container mx-auto flex-wrap gap-2 pb-10'>
          {
            data.acf.galeria.map((item)=>{
              return <ItemRealization key={item.id} src={item.full_image_url} />
            })
          }
      </div>
    
    </div>
  )
}

export default index