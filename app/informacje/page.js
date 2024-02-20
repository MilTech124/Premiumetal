import React from "react";

function page() {
  return (
    <div className="mx-auto container">
      <div className="flex max-md:flex-wrap max-md:-order-2 justify-between pb-10">
        <div className="px-2">
          <h1 className="text-red pt-5">Informace</h1>

          <p className="text-xl pt-10 pr-10">
            Společnost PREMIUMetal vyrábí garáže té nejvyšší kvality. Poskytneme
            vám odborné poradenství a pomůžeme vám najít optimální řešení. Všem
            zákazníkům garantujeme komplexní servis. Naši odborníci vám poradí
            od okamžiku objednání až po dodání a montáž našich produktů. Díky
            širokému sortimentu výrobků jsme schopni uspokojit potřeby i těch
            nejnáročnějších zákazníků. Jako výrobce prémiových garáží
            poskytujeme vysokou kvalitu zpracování za atraktivní cenu. Podívejte
            se na naši nabídku
          </p>
        </div>
        <img
          src="/images/informacje.webp"
          className=" w-[400px] max-md:-order-1"
          alt="informacje"
        />
      </div>

      <h2 className="text-center text-white bg-red py-5 ">Brána</h2>

      <div className="flex py-10 justify-evenly">
        <div>
          <img src="/images/uchylna.webp" className="w-[350px]" alt="uchylna" />
          <h4 className="text-center">Výklopná brána</h4>
        </div>
        <div>
          <img
            src="/images/otwierana.webp"
            className="w-[350px]"
            alt="podnoszona"
          />
          <h4 className="text-center">Dvoukřídlá</h4>
        </div>
      </div>
      <h2 className="text-center text-white bg-red py-5  ">Profil plechu</h2>
      <div className="flex py-10 gap-5 justify-evenly px-2">
        <div>
          <img src="/images/pion.webp" alt="pionowe" />
          <h4 className="text-center">Vertikální</h4>
        </div>
        <div>
          <img src="/images/poziom.webp" alt="poziome" />
          <h4 className="text-center">Horizontální</h4>
        </div>
      </div>
      <h2 className="text-center text-white bg-red py-5 ">Střešní krytina</h2>
      <div className="flex py-10 justify-evenly">
        <div>
          <img src="/images/dachowka.webp" alt="uchylna" />
          <h4 className="text-center">Plechová dlaždice</h4>
        </div>
        <div>
          <img src="/images/trapez.webp" alt="podnoszona" />
          <h4 className="text-center">Trapézový plech</h4>
        </div>
      </div>
    </div>
  );
}

export default page;
