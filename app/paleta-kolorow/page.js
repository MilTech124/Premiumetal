import React from "react";

function page() {
  return (
    <div className="mx-auto container">
      <div className="flex max-md:flex-wrap max-md:-order-2 justify-between">
        <div className="px-2">
          <h1 className="text-red pt-5">Naše paleta barev</h1>
          <h4 className="pt-5 pb-2">Plníme vaše vize</h4>
          <p className="text-xl pr-10">
            V Premiumetal chápeme, jak důležité je sladit barvu garáže se stylem
            a charakterem vaší nemovitosti. Proto nabízíme širokou škálu barev
            RAL (lesklá) a BTX (matná), které umožňují dokonalé sladění s
            architekturou a okolím vašeho domu.
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
              Naše škála barev RAL a BTX pokrývá celé spektrum od klasické bílé
              a šedé až po výraznější barvy. Díky použití vysoce kvalitního
              barevného povlaku zaručujeme trvanlivost a odolnost barev vůči
              povětrnostním vlivům.
            </p>
          </div>
          {/* ITEM 1 */}
          {/* ITEM 2 */}
          <div className="p-2 bg-szary ">
            <h4>Varianty v imitaci dřeva</h4>
            <p>
              Abychom splnili očekávání milovníků přírodních povrchů, nabízíme
              také garáže i v odstínech připomínajících dřevo. Naše povrchové
              úpravy imitující dřevo spojují hřejivost a estetiku přírodního
              materiálu s odolností a snadnou údržbou
            </p>
          </div>
          {/* ITEM 2 */}
          {/* ITEM 3 */}
          <div className="p-2 bg-szary ">
            <h4>Individuální sladění:</h4>
            <p>
              Poskytujeme možnost individuálního výběru barev, aby byla každá
              garáž jedinečná a odrážela osobní styl našich zákazníků. Naši
              odborníci jsou k dispozici, aby vám pomohli vybrat dokonalý odstín
              a zajistili, že konečný produkt bude přesně takový, jaký
              potřebujete
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
