"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";

function SelfConfigGarage() {
  const items = [
    {
      title: "Talaj előkészítése",
      image: "/images/przygotowanie.png",
      link: "/przygotowanie-podloza",
    },
    {
      title: "Színpaletta",
      image: "/images/paleta.png",
      link: "/paleta-kolorow",
    },
    {
      title: "Információk",
      image: "/images/informacje.png",
      link: "/informacje",
    },
  ];

  return (
    <div className="flex  flex-col justify-center py-10">
      <h2 className="text-center bg-szary py-2 mb-5 w-full text-red ">
        Konfiguráld saját garázsodat az igényeidnek megfelelően
      </h2>
      <Fade direction="up">
        <p className=" px-2 text-center md:px-20 text-2xl">
          A PREMIUMetal legmagasabb minőségű garázsokat gyárt. Szaktanácsadással
          állunk rendelkezésre, és segítünk a legjobb ajánlatot kiválasztásában.
          Átfogó szolgáltatást garantálunk minden ügyfelünknek, a szakértőink
          tanácsukkal rendelkezésükre állnak a megrendeléstől a termékek
          szállításáig és telepítéséig. Széles termékválasztékunknak
          köszönhetően a legigényesebb ügyfelek igényeit is ki tudjuk elégíteni.
          A prémium garázsok gyártójaként kiváló minőségű kivitelezést nyújtunk
          előnyös áron. Ismerkedj meg ajánlatunkkal.
        </p>
      </Fade>

      <div className="flex justify-evenly flex-wrap">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex max-sm:scale-90 flex-col justify-center text-red font-bold items-center pt-5"
          >
            <Fade>
              <p className="text-2xl pb-2 ">{item.title}</p>
            </Fade>
            <Fade delay={100 + index * 100}>
              <img
                src={item.image}
                alt={item.title}
                className="w-80 h-80 object-cover"
              />{" "}
            </Fade>
            <Fade delay={300 + index * 100} className="!-mt-5">
              <a href={item.link}>
                <button className="btn bg-red">Bővebben</button>
              </a>{" "}
            </Fade>
          </div>
        ))}
      </div>
      <div className="w-full -z-10 bg-szary -mt-14 h-20"></div>
    </div>
  );
}

export default SelfConfigGarage;
