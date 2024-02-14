import React from "react";

function page() {
  return (
    <div className="mx-auto container">
      <div className="flex max-md:flex-wrap max-md:-order-2 justify-between">
        <div className="px-2">
          <h1 className="text-red pt-5">Doplňkové příslušenství</h1>

          <p className="text-xl pt-10 pr-10">
            Při objednávce plechové garáže se vyplatí zvážit dokoupení dalšího
            příslušenství, které vaši garáž nejen vylepší, ale také zpříjemní
            její používání..
          </p>
        </div>
        <img
          src="/images/rynna.webp"
          className=" w-[400px] max-md:-order-1"
          alt=""
        />
      </div>
      <img src="/images/garaz-akcesoria.webp" className="w-full p-10" alt="" />
      <div className="flex flex-col">
        {/* ITEM 1 */}
        <div className="flex justify-between">
          <div className="w-20 py-10 max-sm:w-10  flex justify-center  bg-black ">
            <div className="bg-red w-10 h-10 flex text-white justify-center items-center rounded-full">
              1
            </div>
          </div>
          <div className="mr-auto max-w-[600px] pl-10 py-10 max-sm:pl-2">
            <h4>Dveře</h4>
            <p>Výhody doplňkových vrat:</p>
            <ul className="list-disc list-inside">
              <li>Usnadňují funkčnost a užívání garáže</li>
              <li>Vrata jsou vybavena zámkem se dvěma klíči</li>
              <li>Montuje se na libovolnou stěnu garáže</li>
              <li>Rozměry: šířka 90 cm a šířka 200 cm</li>
            </ul>
          </div>
          <img
            src="/images/door.webp"
            className=" md:w-60 w-20 pt-10 h-full"
            alt=""
          />
        </div>
        {/* ITEM 1 */}
        {/* ITEM 2 */}
        <div className="flex justify-between">
          <div className="w-20 py-10 max-sm:w-10  flex justify-center  bg-black ">
            <div className="bg-red w-10 h-10 flex text-white justify-center items-center rounded-full">
              2
            </div>
          </div>
          <div className="mr-auto max-w-[600px] pl-10 py-10 max-sm:pl-2">
            <h4>Dodatečné okno</h4>
            <p>TECHNICKÉ ÚDAJE OKEN</p>
            <ul className="list-disc list-inside">
              <li>Materiál: PVC</li>
              <li>jediné sklo</li>
              <li>Rozměr 60x80 cm nebo 60x100</li>
              <li>Různé dostupné</li>
            </ul>
          </div>
          <img
            src="/images/okno.webp"
            className="md:w-60 w-20 pt-10 h-full"
            alt=""
          />
        </div>
        {/* ITEM 2 */}
        {/* ITEM 3 */}
        <div className="flex justify-between">
          <div className="w-20 py-10 max-sm:w-10  flex justify-center  bg-black ">
            <div className="bg-red w-10 h-10 flex text-white justify-center items-center rounded-full">
              3
            </div>
          </div>
          <div className="mr-auto max-w-[600px] pl-10 py-10 max-sm:pl-2">
            <h4>Kování</h4>
            <ul className="list-disc list-inside">
              <li>Kování zlepšují estetiku povrchové úpravy garáže</li>
              <li>.Použijí se na vnější stranu rohů garáže</li>
              <li>
                Lze s nimi také dokončit střechu v přední a zadní části garáže
              </li>
              <li>Kování je sladěno s barvou garáže popř. z palety barev</li>
            </ul>
          </div>
          <img
            src="/images/okucie2.webp"
            className="md:w-60 w-20 pt-10 h-full"
            alt=""
          />
        </div>
        {/* ITEM 3 */}
        {/* ITEM 4 */}
        <div className="flex justify-between">
          <div className="w-20 py-10 max-sm:w-10  flex justify-center  bg-black ">
            <div className="bg-red w-10 h-10 flex text-white justify-center items-center rounded-full">
              4
            </div>
          </div>
          <div className="mr-auto max-w-[600px] pl-10 py-10 max-sm:pl-2">
            <h4>Žlaby</h4>
            <p>Výhody PVC okapů:</p>
            <ul className="list-disc list-inside">
              <li>Výroba z nejkvalitnějších plastů</li>
              <li> Vysoká odolnost výrobků vůči povětrnostním vlivům</li>
              <li>
                Nejvyšší estetika zpracování, přesnost spojů okapových profilů a
                potrubí
              </li>
            </ul>
          </div>
          <img
            src="/images/orynnowanie.webp"
            className="md:w-60 w-20 pt-10 h-full"
            alt=""
          />
        </div>
        {/* ITEM 4 */}
        {/* ITEM 5 */}
        <div className="flex justify-between">
          <div className="w-20 py-10 max-sm:w-10  flex justify-center  bg-black ">
            <div className="bg-red w-10 h-10 flex text-white justify-center items-center rounded-full">
              5
            </div>
          </div>
          <div className="mr-auto max-w-[600px] pl-10 py-10 max-sm:pl-2">
            <h4>Automatická brána</h4>
            <p>Sada obsahuje</p>
            <ul className="list-disc list-inside">
              <li>1 pohon HOME s vestavěnou řídící jednotkou a přijímačem</li>
              <li> 1 kolejnici s řetězovým pohonem</li>
              <li>2 2-kanálové dálkové ovladače</li>
            </ul>
          </div>
          <img
            src="/images/automat.webp"
            className="md:w-60 w-20 pt-10 h-full"
            alt=""
          />
        </div>
        {/* ITEM 5 */}
        {/* ITEM 6 */}
        <div className="flex justify-between">
          <div className="w-20 py-10 max-sm:w-10  flex justify-center  bg-black ">
            <div className="bg-red w-10 h-10 flex text-white justify-center items-center rounded-full">
              6
            </div>
          </div>
          <div className="mr-auto max-w-[600px] pl-10 py-10 max-sm:pl-2">
            <h4>Nýty a šrouby</h4>
            <p>
              Dbáme na ty nejmenší detaily, proto pro zvýšení estetické hodnoty
              garáže používáme nýty a šrouby v barvě ladící s barvou plechu
              garáže.
            </p>
            <ul className="list-disc list-inside">
              <li>Sladěné s barvou garáže</li>
            </ul>
          </div>
          <img
            src="/images/nity.webp"
            className="md:w-60 w-20 pt-10 h-full"
            alt=""
          />
        </div>
        {/* ITEM 6 */}
        {/* ITEM 7 */}
        <div className="flex justify-between">
          <div className="w-20 py-10 max-sm:w-10  flex justify-center  bg-black ">
            <div className="bg-red w-10 h-10 flex text-white justify-center items-center rounded-full">
              7
            </div>
          </div>
          <div className="mr-auto max-w-[600px] pl-10 py-10 max-sm:pl-2">
            <h4>Antikondenzační plsť</h4>
            <ul className="list-disc list-inside">
              <li>Zabraňuje kondenzaci vody</li>
            </ul>
          </div>
          <img
            src="/images/filc.webp"
            className="md:w-60 w-20 pt-10 h-full"
            alt=""
          />
        </div>
        {/* ITEM 7 */}
      </div>
    </div>
  );
}

export default page;
