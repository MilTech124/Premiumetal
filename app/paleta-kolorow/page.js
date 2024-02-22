import React from "react";

function page() {
  return (
    <div className="mx-auto container">
      <div className="flex max-md:flex-wrap max-md:-order-2 justify-between">
        <div className="px-2">
          <h1 className="text-red pt-5">Nasza paleta kolorów</h1>
          <h4 className="pt-5 pb-2">Spełniamy Twoje wizje</h4>
          <p className="text-xl pr-10">
            W PREMIUMetal rozumiemy, jak ważne jest dopasowanie koloru garażu do
            stylu i charakteru Twojej nieruchomości. Dlatego oferujemy szeroką
            gamę kolorów z palety RAL, co pozwala na idealne zgranie z
            architekturą Twojego domu oraz otoczeniem. Kolory widoczne na
            zdjęciach produktów mogą delikatnie różnić się w rzeczywistości, w
            zależności od ustwień Państwa ekranu.
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
            <h4>Kolory według Palety RAL:</h4>
            <p>
              Nasza oferta kolorów RAL obejmuje całe spektrum, od klasycznych
              bieli i szarości po bardziej wyraziste barwy. Dzięki zastosowaniu
              wysokiej jakości powłok, gwarantujemy trwałość i odporność kolorów
              na warunki atmosferyczne.
            </p>
          </div>
          {/* ITEM 1 */}
          {/* ITEM 2 */}
          <div className="p-2 bg-szary ">
            <h4>Opcje Drewnopodobne:</h4>
            <p>
              Aby sprostać oczekiwaniom miłośników naturalnych wykończeń,
              oferujemy również garaże w odcieniach drewnopodobnych. Nasze
              wykończenia imitujące drewno łączą w sobie ciepło i estetykę
              naturalnego materiału z wytrzymałością i łatwością konserwacji.
            </p>
          </div>
          {/* ITEM 2 */}
          {/* ITEM 3 */}
          <div className="p-2 bg-szary ">
            <h4>Indywidualne Dopasowanie:</h4>
            <p>
              Zapewniamy możliwość indywidualnego doboru kolorów, aby każdy
              garaż był unikatowy i odzwierciedlał osobisty styl naszych
              klientów. Nasi eksperci są do Twojej dyspozycji, aby pomóc w
              wyborze idealnego odcienia i zapewnić, że finalny produkt będzie
              dokładnie taki, jakiego potrzebujesz.
            </p>
          </div>
          {/* ITEM 3 */}
        </div>
         {/* ITEM KOLORKI */}
         <div className="md:w-1/2 ">
          <img src="/images/kolorystyka.webp" alt="kolor1" />
          <div className="flex flex-wrap ">
            <div className="w-1/2 flex flex-col items-center">
              <img src="/images/ciemny_orzech.webp" alt="" />
              <p className="text-center text-2xl font-semibold text-neutral-600">
                Ciemny orzech
              </p>
            </div>
            <div className="w-1/2 flex flex-col items-center">
              <img src="/images/zloty_dab_multi.webp" alt="" />
              <p className="text-center text-2xl font-semibold text-neutral-600">
                Złoty Dąb Multigloss
              </p>
            </div>
            <div className="w-1/2 flex flex-col items-center">
              <img src="/images/winchester.webp" alt="" />
              <p className="text-center text-2xl font-semibold text-neutral-600">
                Winchester
              </p>
            </div>
            <div className="w-1/2 flex flex-col items-center">
              <img src="/images/zloty_dab.webp" alt="" />
              <p className="text-center text-2xl font-semibold text-neutral-600">
                Złoty Dąb 
              </p>
            </div>
          </div>
          {/* <img src="/images/kolorystyka_2.webp" alt="kolor2" /> */}
        </div>
      </div>
      
    </div>
  );
}

export default page;
