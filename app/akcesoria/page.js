import React from "react";

function page() {
  return (
    <div className="mx-auto container">
      <div className="flex max-md:flex-wrap max-md:-order-2 justify-between">
        <div className="px-2">
          <h1 className="text-red pt-5">Dodatočné príslušenstvo</h1>

          <p className="text-xl pt-10 pr-10">
            Pri objednávaní plechovej garáže oplatí sa zvážiť zakúpenie ďalšieho
            príslušenstva, ktoré vašu garáž nielen vylepší, ale aj spríjemní jej
            používanie.
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
            <h4>Dvere</h4>
            <p>Výhody dodatočných dverí:</p>
            <ul className="list-disc list-inside">
              <li>Uľahčujú funkčnosť a používanie garáže</li>
              <li> Dvere sú vybavené zámkom na dva kľúče</li>
              <li>Montované na akúkoľvek stenu garáže</li>
              <li>Rozmery: šírka 90 cm a 200 cm</li>
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
            <h4>Dodatočné okno</h4>
            <p>TECHNICKÉ ÚDAJE OKNA :</p>
            <ul className="list-disc list-inside">
              <li>Materiál: PVC</li>
              <li>Jednoduché sklo</li>
              <li>Rozmer 60x80 cm alebo 60x100</li>
              <li>Rôzne dostupné</li>
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
            <h4>Kovania</h4>
            <ul className="list-disc list-inside">
              <li>Kovania zlepšujú estetiku povrchovej úpravy garáže</li>
              <li>Používajú sa na vonkajšiu stranu rohov garáže</li>
              <li>
              Môžu sa použiť aj na ukončenie strechy v prednej a zadnej časti garáže
              </li>
              <li>Kovanie je zladené s farbou garáže resp. z farebnej palety</li>
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
            <h4>Odkvapy</h4>
            <p>Výhody PVC odkvapov:</p>
            <ul className="list-disc list-inside">
              <li>Výroba z najkvalitnejších plastov</li>
              <li>Vysoká odolnosť výrobkov voči poveternostným vplyvom</li>
              <li>
              Najvyššia estetika spracovania, presnosť v spojoch odkvapových profilov a rúr
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
            <h4>Pohon brány</h4>
            <p>Sada obsahuje</p>
            <ul className="list-disc list-inside">
              <li> 1 pohon HOME so vstavanou riadiacou jednotkou a prijímačom</li>
              <li> 1 koľajnicu s reťazovým pohonom</li>
              <li> 2 2-kanálové diaľkové ovládače</li>
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
            <h4>Nity a skrutky</h4>
            <p>
              Dbáme na tie najmenšie detaily, preto pre zvýšenie estetickej hodnoty garáže používame nity a skrutky vo farbe, ktorá ladí s farbou plechu garáže.
            </p>
            <ul className="list-disc list-inside">
              <li>Zladené s farbou garáže</li>
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
            <h4>Antikondenzačná plsť</h4>
            <ul className="list-disc list-inside">
              <li>Zabraňuje kondenzácii vody</li>
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
