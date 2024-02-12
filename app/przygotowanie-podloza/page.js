import React from "react";

function page() {
  return (
    <div className="mx-auto container">
      <div className="flex max-md:flex-wrap max-md:-order-2 justify-between">
        <div className="px-2">
          <h1 className="text-red pt-5">Talaj előkészítése </h1>
          <h4 className="pt-5 pb-2">Talajkiegyenlítés </h4>
          <p className="text-xl pr-10">
            Kulcsfontosságú a garázs alatti talaj kiegyenlítése és szintezése. A
            garázs tervezett méreteinél kb. 20 cm-rel nagyobb beton esztrichet
            ajánlunk. Ez a szerkezeti stabilitás biztosítása érdekében fontos.
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
            <h4>Beton esztrich </h4>
            <p>
              Beton esztrich kivitelezését ajánljuk különösen akkor, ha a garázs
              autó parkolóhelyeként lesz igénybe véve. Az esztrichnek a garázs
              mindkét oldalánál 15-30 cm-rel nagyobbnak kell lennie, a
              betonréteg optimális mélysége pedig a következő lehet
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
            <h4>Betontömbök</h4>
            <p>
              Ideiglenes megoldások vagy tárolóhelyként szolgáló garázsok
              esetében elegendő lehet a garázs falai alá helyezett betontömbök
              alkalmazása. Olcsók és könnyen telepíthetők. A blokkokat a garázs
              kerületén egyenletesen kell elrendezni, optimális számuk a 6
              darab. Fontos, hogy gondosan szintezzük és kis lyukakat ássunk a
              blokkok alá.
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
            <h4>Alapzat a körvonal mentén</h4>
            <p>
              A bádoggarázs körvonala mentén készített alapozás kulcsfontosságú
              a stabilitás biztosításához. Ez a fajta alapozás különösen
              állandóbb garázsszerkezeteknél ajánlott.
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
