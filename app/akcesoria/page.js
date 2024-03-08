import React from "react";

function page() {
  return (
    <div className="mx-auto container">
      <div className="flex max-md:flex-wrap max-md:-order-2 justify-between">
        <div className="px-2">
          <h1 className="text-red pt-5">További tartozékok</h1>

          <p className="text-xl pt-10 pr-10">
            Lemezgarázs rendelésekor érdemes megfontolni a további kiegészítők
            beszerzését, amelyek a garázst nemcsak tovább fejlesztik, hanem
            praktikusabbá teszik használatát.
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
            <h4>Ajtó</h4>
            <p>A további ajtók előnyei:</p>
            <ul className="list-disc list-inside">
              <li>Praktikusabbá teszi a garázs használatát. </li>
              <li>
                Az ajtó zárral felszerelt melyhez 2db kulcsot biztosítunk{" "}
              </li>
              <li>A garázs bármely falára felszerelhető</li>
              <li>Méretei: 90 cm széles és 200 cm magas </li>
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
            <h4>További Ablakok</h4>
            <p>ABLAK TECHNIKAI ADATAI:</p>
            <ul className="list-disc list-inside">
              <li>Anyag: PVC: </li>
              <li>Egyrétegű üvegezés </li>
              <li>Méretek 60x80 cm vagy 60x100</li>
              <li>Különféle színben kapható</li>
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
            <h4>Szerelvény - takarólemez</h4>
            <ul className="list-disc list-inside">
              <li>A szerelvények stílusosabbá teszik a garázs esztétikáját </li>         
              <li>
                A garázs külső sarkaira kerülnek rögzítésre, illetve az elülső
                és hátsó részén a tető befejezéséhez is felszerelhetőek
              </li>
              <li>
                A szerelvényeket a garázs színéhez igazítjuk, de egyedi szín is
                választható
              </li>
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
            <h4>Ereszcsatornák</h4>
            <p>A PVC ereszcsatornák előnyei:</p>
            <ul className="list-disc list-inside">
              <li>Kiváló minőségű műanyagból gyártottak</li>
              <li>
                A termékek időjárási körülményekkel szemben nagyfokú
                ellenállóképességgel rendelkeznek
              </li>
              <li>
                Kivitelezésük kiváló esztétikájú, az ereszcsatorna szakaszok és
                csövek csatlakozása precíz
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
            <h4>Kapunyitó automata</h4>
            <p>A készlet tartalma:</p>
            <ul className="list-disc list-inside">
              <li>
                1 HOME működtető beépített vezérlőegységgel
                és vevőegységgel.
              </li>
              <li>1 láncos hajtósí</li>
              <li>2 db 2-csatornás távirányító</li>
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
            <h4>Szegecsek és csavarok</h4>
            <p>
              A legapróbb részletekre is ügyelünk, így a garázs esztétikájának
              növelése érdekében a garázslemez színével megegyező színű
              szegecseket és csavarokat használunk.
            </p>
            <ul className="list-disc list-inside">
            
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
            <h4>Anti-kondenzációs filc</h4>
            <ul className="list-disc list-inside">
              <li>Megakadályozza a vízlecsapódás</li>
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
