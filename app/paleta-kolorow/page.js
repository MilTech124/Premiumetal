import React from "react";

function page() {
  return (
    <div className="mx-auto container">
      <div className="flex max-md:flex-wrap max-md:-order-2 justify-between">
        <div className="px-2">
          <h1 className="text-red pt-5">Naše Barevná Paleta</h1>
          <h4 className="pt-5 pb-2">Plníme vaše vize</h4>
          <p className="text-xl pr-10">
            V Premiumetal chápeme, jak důležité je sladit barvu garáže se stylem
            a charakterem vaší nemovitosti. Proto nabízíme širokou škálu barev z
            palety RAL, která jim umožňuje dokonale ladit s architekturou vašeho
            domu a okolí..
          </p>
        </div>
        <img
          src="/images/paleta_baner.webp"
          className=" w-[400px] max-md:-order-1"
          alt=""
        />
      </div>
      <div className="flex max-md:flex-wrap justify-center gap-5 pt-10 px-2">
        <div className="flex  md:w-1/2 flex-col gap-5">
          {/* ITEM 1 */}
          <div className="p-2 bg-szary ">
            <h4>Barvy dle RAL palety:</h4>
            <p>
              Naše škála barev RAL pokrývá celé spektrum, od klasických bílých a
              šedých až po výraznější barvy. Díky použití kvalitních nátěrů
              garantujeme trvanlivost a barevnou odolnost vůči povětrnostním
              vlivům.
            </p>
          </div>
          {/* ITEM 1 */}
          {/* ITEM 2 */}
          <div className="p-2 bg-szary ">
            <h4>Možnosti připomínající dřevo:</h4>
            <p>
              Abychom splnili očekávání milovníků přírodních povrchových úprav,
              nabízíme garáže i v odstínech připomínajících dřevo. Naše
              povrchové úpravy imitující dřevo kombinují teplo a estetiku
              přírodního materiálu s odolností a snadnou údržbou.
            </p>
          </div>
          {/* ITEM 2 */}
          {/* ITEM 3 */}
          <div className="p-2 bg-szary ">
            <h4>Individuální sladění:</h4>
            <p>
              Poskytujeme možnost individuálního výběru barev, aby byla každá
              garáž jedinečná a odrážela osobní styl našich zákazníků. Naši
              odborníci jsou po ruce, aby vám pomohli vybrat perfektní odstín a
              zajistili, že konečný produkt bude přesně takový, jaký
              potřebujete.
            </p>
          </div>
          {/* ITEM 3 */}
        </div>
        <div className="md:w-1/2 ">
          <img src="/images/kolorystyka.webp" alt="kolor1" />
          <img src="/images/kolorystyka_2.webp" alt="kolor2" />
        </div>
      </div>
    </div>
  );
}

export default page;
