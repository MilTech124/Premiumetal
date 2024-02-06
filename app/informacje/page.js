import React from "react";

function page() {
  return (
    <div className="mx-auto container">
      <div className="flex max-md:flex-wrap max-md:-order-2 justify-between pb-10">
        <div className="px-2">
          <h1 className="text-red pt-5">Informacje</h1>

          <p className="text-xl pt-10 pr-10">
            Firma PREMIUMetal produkuje garaże najwyższej jakości.<br></br>
            Służymy fachowym doradztwem oraz pomocą w znalezieniu najlepszej
            oferty. Gwarantujemy wszystkim klientom kompleksową obsługę, a nasi
            eksperci służą radą od momentu zamówienia po dostawę oraz montaż
            naszych produktów. Dzięki szerokiej ofercie jesteśmy w stanie
            zaspokoić potrzeby najbardziej wymagających klientów. Jako producent
            garaży klasy Premium zapewniamy wysoką jakość wykonania w
            atrakcyjnej cenie. Zapoznaj się z naszą ofertą.
          </p>
        </div>
        <img
          src="/images/informacje.webp"
          className=" w-[400px] max-md:-order-1"
          alt="informacje"
        />
      </div>

      <h2 className="text-center text-white bg-red py-5 ">Brama</h2>

      <div className="flex py-10 justify-evenly">
        <div>
            <img src="/images/uchylna.webp" className="w-[350px]" alt="uchylna" />
            <h4 className="text-center">Uchylna podnoszona do góry</h4>
        </div>
        <div>
            <img src="/images/otwierana.webp" className="w-[350px]" alt="podnoszona" />
            <h4 className="text-center">Dwuskrzydłowa</h4>
        </div>
      </div>
      <h2 className="text-center text-white bg-red py-5  ">Przetłoczenia blachy</h2>
      <div className="flex py-10 gap-5 justify-evenly px-2">
        <div>
            <img src="/images/pion.webp" alt="pionowe" />
            <h4 className="text-center">Pionowe</h4>
        </div>
        <div>
            <img src="/images/poziom.webp" alt="poziome" />
            <h4 className="text-center">Poziome</h4>
        </div>
      </div>
      <h2 className="text-center text-white bg-red py-5 ">Pokrycia dachowe</h2>
      <div className="flex py-10 justify-evenly">
        <div>
            <img src="/images/dachowka.webp" alt="uchylna" />
            <h4 className="text-center">Blachodachówka</h4>
        </div>
        <div>
            <img src="/images/trapez.webp" alt="podnoszona" />
            <h4 className="text-center">Blachą trapezową</h4>
        </div>
      </div>
    </div>
  );
}

export default page;
