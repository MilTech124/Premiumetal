'use client'
import React from "react";
import { Fade } from "react-awesome-reveal";

function SelfConfigGarage() {
    const items = [
        {
            title:"Przygotowanie podłoża",
            image:"/images/przygotowanie.png",
            link:"/przygotowanie-podloza"
        },
        {
            title:"Paleta kolorów",
            image:"/images/paleta.png",
            link:"/paleta-kolorow"
        },
        {
            title:"Informacje",
            image:"/images/informacje.png",
            link:"/informacje"
        }
    ]

  return (
    <div className="flex  flex-col justify-center py-10">
      <h2 className="text-center bg-szary py-2 mb-5 w-full text-red ">
        Skonfiguruj własny garaż<br></br> na swoje potrzeby
      </h2>
      <Fade direction="up">
        <p className=" px-2 text-center md:px-20 text-2xl">
          Firma PREMIUMetal produkuje garaże najwyższej jakości. Służymy fachowym
          doradztwem oraz pomocą w znalezieniu najlepszej oferty. Gwarantujemy
          wszystkim klientom kompleksową obsługę, a nasi eksperci służą radą od
          momentu zamówienia po dostawę oraz montaż naszych produktów. Dzięki
          szerokiej ofercie jesteśmy w stanie zaspokoić potrzeby najbardziej
          wymagających klientów. Jako producent garaży klasy Premium zapewniamy
          wysoką jakość wykonania w atrakcyjnej cenie.<br></br> Zapoznaj się z naszą
          ofertą.
        </p>
      </Fade>
  

      <div className="flex justify-evenly flex-wrap">
        {items.map((item,index)=>(
            <div key={index} className="flex max-sm:scale-90 flex-col justify-center text-red font-bold items-center pt-5">
              <Fade className="text-2xl pb-2 ">{item.title}</Fade>
              <Fade delay={100+index*100} ><img src={item.image} alt={item.title} className="w-80 h-80 object-cover"/> </Fade>              
              <Fade delay={300+index*100} className="!-mt-5" ><a href={item.link}><button className="btn bg-red">Więcej</button></a> </Fade> 
            </div>
        ))}
      </div>
      <div className="w-full -z-10 bg-szary -mt-14 h-20"></div>

    </div>
  );
}

export default SelfConfigGarage;
