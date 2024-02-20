"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";

function SelfConfigGarage() {
  const items = [
    {
      title: "Příprava podkladu",
      image: "/images/przygotowanie.png",
      link: "/przygotowanie-podloza",
    },
    {
      title: "Paleta barev",
      image: "/images/paleta.png",
      link: "/paleta-kolorow",
    },
    {
      title: "Informace",
      image: "/images/informacje.webp",
      link: "/informacje",
    },
  ];

  return (
    <div className="flex  flex-col justify-center py-10">
      <h2 className="text-center bg-szary py-2 mb-5 w-full text-red ">
        Nakonfigurujte si garáž podle svých potřeb
      </h2>
      <Fade direction="up">
        <p className=" px-2 text-center md:px-20 text-2xl">
          PREMIUMetal vyrábí garáže té nejvyšší kvality. Poskytneme vám odborné
          poradenství a pomůžeme vám najít optimální řešení. Všem zákazníkům
          garantujeme komplexní servis. Naši odborníci vám poradí od okamžiku
          objednání až po dodání a montáž našich produktů. Díky široké nabídce
          výrobků jsme schopni uspokojit potřeby i těch nejnáročnějších
          zákazníků. Jako výrobce prémiových garáží poskytujeme vysokou kvalitu
          zpracování za atraktivní cenu. Podívejte se na naši nabídku.
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
                <button className="btn bg-red">Více</button>
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
