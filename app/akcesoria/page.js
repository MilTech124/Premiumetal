import React from "react";

function page() {
  return (
    <div className="mx-auto container">
      <div className="flex max-md:flex-wrap max-md:-order-2 justify-between">
        <div className="px-2">
          <h1 className="text-red pt-5">Doplňkové příslušenství</h1>

          <p className="text-xl pt-10 pr-10">
            Při objednávce plechové garáže se vyplat zvážit pořízení dalšího
            příslušenství, které nejenže zlepší funkčnost vaší garáže, ale
            zároveň zvýší její praktičnost.
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
              <li>Umožňují snadnější využívání garáže a její účelnost</li>
              <li>Vrata jsou vybavena zámkem se dvěma klíči</li>
              <li>Montuje se na libovolnou stěnu garáže</li>
              <li>Rozměry: šířka 90 cm a výška 200 cm</li>
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
              <li>Rozměry: 60x80 cm nebo 60x100 cm</li>
              <li>Různé dostupné barevné varianty</li>
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
              <li>
                Laminování garáže pomocí kování zlepšuje estetiku povrchové
                úpravy garáže
              </li>
              <li> Používají se na vnějších rozích garáže</li>
              <li>
                Lze je použít také k dokončení střechy v přední a zadní části
                garáže
              </li>
              <li>Kování se vybírá v barvě garáže nebo z palety barev</li>
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
            <h4>Okapové žlaby</h4>
            <p>Výhody PVC žlabů:</p>
            <ul className="list-disc list-inside">
              <li>Výroba z nejkvalitnějšího plastu</li>
              <li> Vysoká odolnost výrobků vůči povětrnostním vlivům</li>
              <li>
                Nejvyšší estetika výroby, přesnost při spojování žlábkových
                profilů a trubek
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
              <li>
                Sada obsahuje 1x pohon HOME s vestavěnou řídicí jednotkou a
                přijímačem
              </li>
              <li>1 kolejnici s řetězovým pohonem</li>
              <li>2x dálkové ovladače</li>
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
              Dbáme i na ty nejmenší detaily, proto pro zvýšení estetické
              hodnoty garáže používáme nýty a šrouby v barvě odpovídající barvě
              garážového panelu
            </p>
            <ul className="list-disc list-inside">
              <li>sladěné s barvou garáže</li>
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
              <li>Zabraňuje kondenzaci vody na streše garáže</li>
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
