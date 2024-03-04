import React from "react";

function page() {
  return (
    <div className="mx-auto container">
      <div className="flex max-md:flex-wrap max-md:-order-2 justify-between">
        <div className="px-2">
          <h1 className="text-red pt-5">Színpalettáink</h1>
          <h4 className="pt-5 pb-2">Megvalósítjuk Elképzeléseit</h4>
          <p className="text-xl pr-10">
            A Premiumetal-nál megértjük mennyire fontos, hogy garázsának színe
            illeszkedjen ingatlanja stílusához és jellegéhez. Ezért kínáljuk a
            RAL-színek széles skáláját, amelyek tökéletes harmóniát tesz
            lehetővé otthona és környezete építészetével.
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
            <h4>RAL Paletta színei:</h4>
            <p>
              A RAL színválasztékunk a teljes színspektrumot lefedi, a
              klasszikus fehértől és szürkétől az élénkebb színekig.A kiváló
              minőségű bevonatok használatának köszönhetően garantáljuk a színek
              megőrzését az időjárási viszonyok hatására.
            </p>
          </div>
          {/* ITEM 1 */}
          {/* ITEM 2 */}
          <div className="p-2 bg-szary ">
            <h4>Fahatású lemezek színválasztéka:</h4>
            <p>
              Hogy eleget tegyünk a természetet kedvelők igényeinek, fahatású
              árnyalatú garázsokat is kínálunk. Felületük a természetes anyagok
              melegét és esztétikáját ötvözik a tartóssággal és a könnyű
              karbantarthatósággal.
            </p>
          </div>
          {/* ITEM 2 */}
          {/* ITEM 3 */}
          <div className="p-2 bg-szary ">
            <h4>Színek testre szabása:</h4>
            <p>
              Lehetőséget kínálunk egyedi színválasztásra, hogy minden garázs
              egyedi legyen, és tükrözze ügyfeleink személyes stílusát.
              Szakértőink segítenek a tökéletes árnyalat kiválasztásában és
              biztosítják, hogy a végtermék pontosan olyan legyen, amilyenre
              szüksége van.
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
