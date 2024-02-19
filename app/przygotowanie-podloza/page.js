import React from "react";

function page() {
  return (
    <div className="mx-auto container">
      <div className="flex max-md:flex-wrap max-md:-order-2 justify-between">
        <div className="px-2">
          <h1 className="text-red pt-5">Príprava podkladu</h1>
          <h4 className="pt-5 pb-2">Vyrovnanie terénu</h4>
          <p className="text-xl pr-10">
            Vyrovnanie a zarovnanie terénu pre vašu garáž je nevyhnutné.
            Betónový poter radšej urobte približne o 20 cm väčší, ako sú
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
              Betónový poter sa odporúča najmä vtedy, ak bude garáž slúžiť ako
              parkovacie miesto pre auto. Poter by mal byť o 15 až 30 cm väčší
              ako každá strana garáže, pričom optimálna hĺbka je 10 až 15 cm.
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
            <h4>Betónové tvárnice</h4>
            <p>
              V prípade dočasných riešení alebo garáží používaných ako
              skladovacie priestory môžu postačovať betónové bloky umiestnené
              pod stenami garáže. Sú lacné a ľahko sa inštalujú. Bloky by mali
              byť rovnomerne rozmiestnené po obvode garáže a optimálny počet je
              6 ks. Je dôležité, aby ste ich starostlivo osadili vo vodorovnej
              polohe a vykopali pre bloky otvory do zeme.
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
            <h4>Základové podložie pozdĺž obvodu</h4>
            <p>
              Príprava základov po obvode plechovej garáže je nevyhnutné na
              zabezpečenie jej stability. Tento typ základov sa odporúča najmä
              pri robustnejších garážových konštrukciách.
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
