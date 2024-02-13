import React from "react";

function page() {
  return (
    <div className="mx-auto container">
      <div className="flex max-md:flex-wrap max-md:-order-2 justify-between">
        <div className="px-2">
          <h1 className="text-red pt-5">Naša paleta farieb</h1>
          <h4 className="pt-5 pb-2">Plníme Vaše vízie</h4>
          <p className="text-xl pr-10">
            V spoločnosti PREMIUMetal si uvedomujeme, že je dôležité zladiť
            farbu garáže so štýlom a charakterom vašej nehnuteľnosti. Preto
            ponúkame širokú škálu farieb RAL, ktoré vám umožnia dokonale sa
            zladiť s architektúrou a okolím Vášho domu
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
            <h4>Farby podľa RAL:</h4>
            <p>
              Naša škála farieb RAL pokrýva celé spektrum, od klasickej bielej a
              sivej až po výraznejšie farby. Vďaka použitiu vysokokvalitných
              náterov zaručujeme trvanlivosť a odolnosť farieb voči
              poveternostným vplyvom.
            </p>
          </div>
          {/* ITEM 1 */}
          {/* ITEM 2 */}
          <div className="p-2 bg-szary ">
            <h4>Možnosti pripomínajúce textúru dreva:</h4>
            <p>
              Aby sme splnili očakávania milovníkov povrchových úprav, ponúkame
              aj garáže v odtieňoch pripomínajúcich drevo. Naše povrchové úpravy
              imitujúce drevo spájajú teplo a estetiku prírodného materiálu s
              odolnosťou a jednoduchou údržbou.
            </p>
          </div>
          {/* ITEM 2 */}
          {/* ITEM 3 */}
          <div className="p-2 bg-szary ">
            <h4>Individuálne prispôsobenie:</h4>
            <p>
              Poskytujeme možnosť individuálneho výberu farieb, aby bola každá
              garáž jedinečná a odrážala osobný štýl našich zákazníkov. Naši
              odborníci sú vám k dispozícii, aby vám pomohli vybrať perfektný
              odtieň a zaistili, že konečný produkt bude presne taký, aký
              potrebujete.
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
