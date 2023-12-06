import React from 'react'
import Hero from '../components/galeria/Hero'
import axios from 'axios'
import ItemRealization from '../components/home/ItemRealization';

const https = require('https');


const agent = new https.Agent({  
  rejectUnauthorized: false
});

const getData = async () =>{  
  try {    
    const data = await axios.get(process.env.NEXT_PUBLIC_HOST + "?pages=galeria", { httpsAgent: agent });
    return data.data[1];    
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function index() {
  const data = await getData()
  console.log("DATA !!!!!!!!!!!",data);
  
  return (
    <div>
      <Hero title='Galeria' />
      <div className='flex justify-center container mx-auto flex-wrap gap-2 -mt-10'>
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