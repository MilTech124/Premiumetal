import React from "react";

function page() {
  return (
    <div className="mx-auto container">
      <div className="flex max-md:flex-wrap max-md:-order-2 justify-between pb-10">
        <div className="px-2">
          <h1 className="text-red pt-5">Információk</h1>

          <p className="text-xl pt-10 pr-10">
            A PREMIUMetal legmagasabb minőségű garázsokat gyárt.<br></br>
            Szaktanácsadással állunk rendelkezésre, és segítünk a legjobb
            ajánlat kiválasztásában. Átfogó szolgáltatást garantálunk minden
            ügyfelünknek, a szakértőink tanácsukkal rendelkezésükre állnak a
            megrendeléstől a termékek szállításáig és telepítéséig. Széles
            termékválasztékunknak köszönhetően a legigényesebb ügyfelek igényeit
            is ki tudjuk elégíteni. A prémium garázsok gyártójaként kiváló
            minőségű kivitelezést nyújtunk előnyös áron. Ismerkedj meg az
            ajánlatunkkal
          </p>
        </div>
        <img
          src="/images/informacje.webp"
          className=" w-[400px] max-md:-order-1"
          alt="informacje"
        />
      </div>

      <h2 className="text-center text-white bg-red py-5 ">Kapu</h2>

      <div className="flex py-10 justify-evenly">
        <div>
          <img src="/images/uchylna.webp" className="w-[350px]" alt="uchylna" />
          <h4 className="text-center">Billenő felfelé nyíló</h4>
        </div>
        <div>
          <img
            src="/images/otwierana.webp"
            className="w-[350px]"
            alt="podnoszona"
          />
          <h4 className="text-center">Kétszárnyas</h4>
        </div>
      </div>
      <h2 className="text-center text-white bg-red py-5  ">
        Dombornyomott lemez 
      </h2>
      <div className="flex py-10 gap-5 justify-evenly px-2">
        <div>
          <img src="/images/pion.webp" alt="pionowe" />
          <h4 className="text-center">Függőleges</h4>
        </div>
        <div>
          <img src="/images/poziom.webp" alt="poziome" />
          <h4 className="text-center">Vízszintes</h4>
        </div>
      </div>
      <h2 className="text-center text-white bg-red py-5 ">Tetőfedés</h2>
      <div className="flex py-10 justify-evenly">
        <div>
          <img src="/images/dachowka.webp" alt="uchylna" />
          <h4 className="text-center">Cserepeslemez</h4>
        </div>
        <div>
          <img src="/images/trapez.webp" alt="podnoszona" />
          <h4 className="text-center">Trapézlemez</h4>
        </div>
      </div>
    </div>
  );
}

export default page;
