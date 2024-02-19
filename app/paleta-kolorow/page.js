import React from "react";

function page() {
  return (
    <div className="mx-auto container">
      <div className="flex max-md:flex-wrap max-md:-order-2 justify-between">
        <div className="px-2">
          <h1 className="text-red pt-5">Naša paleta farieb</h1>
          <h4 className="pt-5 pb-2">Splnenie vašej predstavy</h4>
          <p className="text-xl pr-10">
            V spoločnosti PREMIUMetal si uvedomujeme, aké dôležité je zladiť
            farbu garáže so štýlom a charakterom vašej nehnuteľnosti. Preto
            ponúkame širokú škálu farieb RAL (lesklá) a BTX (matná), vďaka
            ktorým môžete dokonale zladiť architektúru a okolie vášho domu.
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
            <h4>Farby podľa palety RAL a BTX: </h4>
            <p>
              Naša paleta farieb RAL a BTX pokrýva celé spektrum od klasickej
              bielej a sivej až po výraznejšie farby. Použitím{" "}
              <b>vysokokvalitného farebného povlaku</b> zaručujeme trvanlivosť a
              odolnosť farieb voči poveternostným vplyvom.
            </p>
          </div>
          {/* ITEM 1 */}
          {/* ITEM 2 */}
          <div className="p-2 bg-szary ">
            <h4>Varianty v imitácii dreva:</h4>
            <p>
              Aby sme splnili očakávania milovníkov prírodných povrchov,
              ponúkame aj garáže v odtieňoch pripomínajúcich drevo. Naše
              povrchové úpravy imitujúce drevo spájajú teplo a estetiku
              prírodných materiálov s odolnosťou a jednoduchou údržbou.
            </p>
          </div>
          {/* ITEM 2 */}
          {/* ITEM 3 */}
          <div className="p-2 bg-szary ">
            <h4>Individuálne prispôsobenie:</h4>
            <p>
              Ponúkame možnosť výberu individuálnych farieb, aby každá garáž
              bola jedinečná a odrážala osobný štýl našich zákazníkov. Naši
              odborníci sú vám k dispozícii, aby vám pomohli vybrať dokonalý
              odtieň a zaistili, že konečný výrobok bude presne taký, aký
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
