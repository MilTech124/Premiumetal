import React from "react";

function page() {
  return (
    <div className="mx-auto container">
      <div className="flex max-md:flex-wrap max-md:-order-2 justify-between">
        <div className="px-2">
          <h1 className="text-red pt-5">Příprava podkladu</h1>
          <h4 className="pt-5 pb-2">Vyrovnání terénu</h4>
          <p className="text-xl pr-10">
            Vyrovnání a srovnání terénu pro vaši garáž je zásadní. Preferujeme
            zhotovení betonového potěru přibližně o 20 cm většího, než jsou
            plánované rozměry garáže. Je to důležité pro zajištění stability
            konstrukce.
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
              Betonový potěr doporučujeme zejména v případě, že garáž bude
              sloužit jako parkovací místo pro auto. Potěr by měl být o 15-30 cm
              větší než každá strana garáže, přičemž optimální hloubka betonové
              vrstvy je 10-15 cm
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
              Pro dočasná řešení nebo garáže používané jako skladovací prostory
              mohou postačit betonové bloky umístěné pod stěnami garáže. Jsou
              levné a snadno se instalují. Bloky by měly být rozmístěny
              rovnoměrně po obvodu garáže a optimální počet je 6 ks. Důležité je
              ich pečlivé vodorovní uložení a vykopání malých otvorů pro bloky.
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
            <h4>Základové podloží podél obvodu</h4>
            <p>
              Příprava základu podél obvodu plechové garáže je zásadní pro
              zajištění její stability. Tento typ základů se doporučuje zejména
              u robustnějších garážových konstrukcí.
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
