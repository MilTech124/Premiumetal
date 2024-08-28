import axios from "axios";
import Hero from "../components/galeria/Hero";
import ItemRealization from "../components/home/ItemRealization";


const getData = async () =>{  
    try {    
      const data = await axios.get(process.env.NEXT_PUBLIC_HOST + "?slug=garaze-z-bramami-segmentowymi"); 
    //   console.log(data.data[0])
      return data.data[0];    

      
    } catch (error) {
      console.log(error);
      return error;
    }
  }

async function page() {
   const data= await getData()
  return (
    <div>
          <Hero title='Garaże z Bramą Segmentową' />
      <div className='flex justify-center container mx-auto flex-wrap gap-2 -mt-12'>
          {
            data.acf.garaze_z_bramami.map((item)=>{
              return <ItemRealization key={item.id} src={item.full_image_url} />
            })
          }
      </div>
    </div>
  )
}

export default page