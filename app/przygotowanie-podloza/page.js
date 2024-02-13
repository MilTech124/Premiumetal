import React from "react";

function page() {
  return (
    <div className="mx-auto container">
      <div className="flex max-md:flex-wrap max-md:-order-2 justify-between">
        <div className="px-2">
          <h1 className="text-red pt-5">Príprava substrátu</h1>
          <h4 className="pt-5 pb-2">Vyrovnanie terénu</h4>
          <p className="text-xl pr-10">
            yrovnanie a zarovnanie pozemku pre garáž je veľmi dôležité.
            Uprednostňujeme betónový poter, ktorý je približne o 20 cm väčší ako
            plánované rozmery garáže. Je to dôležité na zabezpečenie stability
            konštrukcie.
          </p>
        </div>
        <img
          src="/images/przygotowanie-baner.webp"
          className=" w-[400px] max-md:-order-1"
          alt=""
        />
      </div>

      <div className="flex max-sm:flex-wrap gap-5 pb-10 items-center pt-10 justify-evenly text-center">
        {/* ITEM 1 */}
        <div className="bg-szary p-5 flex flex-col items-center justify-between  h-[470px] max-w-[350px]">
          <div>
            <h4>Betónový poter</h4>
            <p>
              Odporúčame betónový poter, najmä ak sa garáž bude používať ako
              parkovacie miesto pre auto. Betónová vrstva by mala byť o 15-30 cm
              väčšia ako každá strana garáže, pričom optimálna hĺbka betónovej
              vrstvy je
            </p>
          </div>
          <img
            src="/images/wylewka_betonowa.webp"
            className="w-[200px]"
            alt=""
          />
        </div>
        {/* ITEM 1 */}
        {/* ITEM 2 */}
        <div className="bg-szary p-5 flex flex-col items-center justify-between  h-[470px] max-w-[350px]">
          <div>
            <h4>Betónové bloky</h4>
            <p>
              V prípade dočasných riešení alebo garáží slúžiacich ako
              skladovacie priestory môžu postačovať betónové bloky umiestnené
              pod stenami garáže. Sú lacné a ľahko sa inštalujú. Bloky by mali
              byť rovnomerne rozmiestnené po obvode garáže, pričom optimálny
              počet je 6 kusov. Je dôležité starostlivo vyrovnať a vykopať malé
              otvory pre bloky.
            </p>
          </div>
          <img
            src="/images/betonowe_bloczki.webp"
            className="w-[200px]"
            alt=""
          />
        </div>
        {/* ITEM 2 */}
        {/* ITEM 3 */}
        <div className="bg-szary p-5  flex flex-col items-center justify-between  h-[470px] max-w-[350px]">
          <div>
            <h4>Základ po obryse</h4>
            <p>
              Príprava základu pozdĺž obrysu plechovej garáže je rozhodujúca pre
              zabezpečenie jej stability. Tento typ základov sa odporúča najmä
              pre trvalejšie garážové stavby.
            </p>
          </div>
          <img
            src="/images/fundament_obrys.webp"
            className="w-[200px]"
            alt=""
          />
        </div>
        {/* ITEM 3 */}
      </div>
    </div>
  );
}

export default page;
