"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";

function SelfConfigGarage() {
  const items = [
    {
      title: "Príprava podkladu",
      image: "/images/przygotowanie.png",
      link: "/przygotowanie-podloza",
    },
    {
      title: "Paleta farieb",
      image: "/images/paleta.png",
      link: "/paleta-kolorow",
    },
    {
      title: "Informácie",
      image: "/images/informacje.webp",
      link: "/informacje",
    },
  ];

  return (
    <div className="flex  flex-col justify-center py-10">
      <h2 className="text-center bg-szary py-2 mb-5 w-full text-red ">
        Nakonfigurujte si garáž <br /> podľa svojich potrieb
      </h2>
      <Fade direction="up">
        <p className=" px-2 text-center md:px-20 text-2xl">
          PREMIUMetal vyrába garáže najvyššej kvality. Poskytneme vám odborné
          poradenstvo a pomôžeme vám nájsť optimálne riešenie. Všetkým našim
          zákazníkom garantujeme komplexný servis. Naši odborníci vám poradia od
          momentu objednania až po dodanie a montáž našich produktov. Vďaka
          našej širokej ponuke výrobkov dokážeme uspokojiť potreby aj tých
          najnáročnejších zákazníkov. Ako výrobca prémiových garáží poskytujeme
          vysokú kvalitu spracovania za atraktívnu cenu. Pozrite si našu ponuku.
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
                <button className="btn bg-red">Viac</button>
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
