import React from "react";

function page() {
  return (
    <div className="mx-auto container">
      <div className="flex max-md:flex-wrap max-md:-order-2 justify-between">
        <div className="px-2">
          <h1 className="text-red pt-5">Příprava podkladu</h1>
          <h4 className="pt-5 pb-2">Vyrovnání terénu</h4>
          <p className="text-xl pr-10">
            Klíčem je vyrovnat plochu pro garáž. Betonovou mazaninu raději
            vyrobíme o rozměrech přibližně o 20 cm větších, než jsou plánované
            rozměry garáže. To je důležité pro zajištění stability konstrukce.
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
            <h4>Betonový potěr</h4>
            <p>
              Betonovou mazaninu doporučujeme použít zejména v případě, že garáž
              bude využívána jako stání pro osobní automobil. Potěr by měl být o
              15-30 cm větší než každá strana garáže, přičemž optimální hloubka
              betonové vrstvy by měla být
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
            <h4>Betonové bloky</h4>
            <p>
              Pro provizorní řešení nebo garáže sloužící jako sklad mohou
              postačovat betonové tvárnice umístěné pod zdmi garáže. Jsou levné
              a snadno se instalují. Bloky by měly být rovnoměrně rozmístěny po
              obvodu garáže a jejich optimální počet je 6 kusů. Je důležité
              pečlivě vyrovnat a vykopat malé otvory pro bloky.
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
            <h4>Základ podél obrysu</h4>
            <p>
              Příprava základu podél obrysu plechové garáže je zásadní pro
              zajištění její stability. Tento typ základů se doporučuje zejména
              pro odolnější konstrukce garáží.
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
