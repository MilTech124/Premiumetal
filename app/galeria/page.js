import React from 'react'
import Hero from '../components/galeria/Hero'
import axios from 'axios'
import ItemRealization from '../components/home/ItemRealization';

// const https = require('https');


// const agent = new https.Agent({  
//   rejectUnauthorized: false
// });

// , { httpsAgent: agent }  do axiosa

const getData = async () =>{  
  try {    
    const data = await axios.get(process.env.NEXT_PUBLIC_HOST + "?slug=galeria"); 
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
      <Hero title='Galeria' />
      <div className='flex justify-center container mx-auto flex-wrap gap-2 -mt-12'>
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