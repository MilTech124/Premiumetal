"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";

function HomeAccesories() {
  return (
    <div className="">
      <h2 className="text-center text-red">Doplňkové příslušenství</h2>
      <div className="flex max-md:flex-wrap justify-center py-10">
        <div className="flex relative flex-col justify-center bg-black md:w-2/5 p-5">
          <Fade direction="left">
            <h3 className="py-5">
              DOPLŇKOVÉ PŘÍSLUŠENSTVÍ PRO VAŠI GARÁŽ ZLEPŠÍ JEJÍ FUNKČNOST
            </h3>
          </Fade>
          <Fade direction="left" delay={200}>
            <p className="text-white text-xl">
              Při objednávce plechové garáže se vyplat zvážit pořízení dalšího
              příslušenství, které nejenže zlepší funkčnost vaší garáže, ale
              zároveň zvýší její praktičnost.
            </p>
          </Fade>
          <a
            href="/akcesoria"
            className="md:absolute right-[-75px] z-20 bottom-[-20px]"
          >
            <button className="btn">Více</button>
          </a>
        </div>
        <Fade direction="right" className="md:w-3/5 p-5 min-w-40">
          <img
            className="w-full"
            src="/images/garaz_akcesoria.webp"
            alt="akcesoria"
          />
        </Fade>
      </div>
    </div>
  );
}

export default HomeAccesories;
