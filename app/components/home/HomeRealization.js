import React from "react";
import ItemRealization from "./ItemRealization";
import axios from "axios";
const https = require('https');

const agent = new https.Agent({  
  rejectUnauthorized: false
});

const Data = async () => {
  try {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
    const data = await axios.get(process.env.NEXT_PUBLIC_HOST + "?pages=galeria", { httpsAgent: agent });
    return data.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}


async function HomeRealization() {

  const data = await  Data()

  const firstElements =()=>{
    const elements=data[0].acf.galeria
    const firstElements = elements.slice(0, 6)
    return firstElements
  } 

  return (
    <div className="container py-10 mx-auto px-2">
      <h2 className="text-5xl">Przykładowe realizacje</h2>
      <p className="py-10 max-w-2xl">
        W Premiumetal każda realizacja jest odzwierciedleniem naszej pasji i
        zaangażowania w tworzenie wyjątkowych garaży. Od malowniczych
        lokalizacji wiejskich po dynamiczne środowiska miejskie, nasze projekty
        są zawsze dostosowane do unikalnych potrzeb i preferencji naszych
        klientów.
      </p>

      <div className="flex gap-5 flex-wrap justify-between max-sm:justify-center">
        {firstElements().map((item) => {  
          return <ItemRealization key={item.id} src={item.full_image_url} />;
        })  }
        
      </div>
    </div>
  );
}

export default HomeRealization;
