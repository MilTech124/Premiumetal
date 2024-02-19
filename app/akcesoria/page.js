import React from "react";

function page() {
  return (
    <div className="mx-auto container">
      <div className="flex max-md:flex-wrap max-md:-order-2 justify-between">
        <div className="px-2">
          <h1 className="text-red pt-5">Doplnkové príslušenstvo</h1>

          <p className="text-xl pt-10 pr-10">
            Pri objednávke plechovej garáže sa oplatí zvážiť zakúpenie
            doplnkového príslušenstva, ktoré nielen zlepší funkčnosť vašej
            garáže, ale zvýši aj jej praktickosť.
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
              <li>Uľahčujú používanie garáže a zvyšujú jej účelnosť</li>
              <li> Dvere sú vybavené zámkom dvoma kľúčmi </li>
              <li>Montujú sa na akúkoľvek stenu garáže</li>
              <li>Rozmery: šírka 90 cm x výška 200 cm </li>
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
            <h4>Doplnkové okno </h4>
            <p>TECHNICKÉ ÚDAJE OKIEN :</p>
            <ul className="list-disc list-inside">
              <li>Materiál: PVC</li>
              <li>Jedno sklo</li>
              <li>Rozmery: 60x80 cm alebo 60x100 cm</li>
              <li>K dispozícii sú rôzne farebné varianty</li>
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
            <h4>Kovanie</h4>
            <ul className="list-disc list-inside">
              <li>
                Lemovanie garáže zlepšuje estetiku povrchovej úpravy garáže
              </li>
              <li>Používajú sa na vonkajších rohoch garáže</li>
              <li>
                Možno ich použiť aj na ukončenie strechy v prednej a zadnej
                časti garáže
              </li>
              <li>Kovania sa vyberajú vo farbe garáže alebo z palety farieb</li>
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
            <h4>Odkvapové žľaby</h4>
            <p>Výhody PVC odkvapových žľabov:</p>
            <ul className="list-disc list-inside">
              <li>Vyrobené z plastu najvyššej kvality</li>
              <li>Vysoká odolnosť voči poveternostným vplyvom</li>
              <li>
                Najvyššia estetika výroby, precíznosť pri spájaní odkvapových
                profilov a rúr
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
            <p>Súprava obsahuje</p>
            <ul className="list-disc list-inside">
              <li>
                {" "}
                1x pohon HOME so zabudovanou riadiacou jednotkou a prijímačom
              </li>
              <li> 1x koľajnicu s reťazovým pohonom</li>
              <li> 2x diaľkové ovládanie</li>
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
              Dbáme aj na tie najmenšie detaily, preto na zvýšenie estetickej
              hodnoty garáže používame nity a skrutky vo farbe zhodnej s farbou
              garážového panelu
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
            <h4>Antikondenzační plsť</h4>
            <ul className="list-disc list-inside">
              <li>Zabraňuje kondenzácii vody na streche</li>
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
