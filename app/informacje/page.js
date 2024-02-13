import React from "react";

function page() {
  return (
    <div className="mx-auto container">
      <div className="flex max-md:flex-wrap max-md:-order-2 justify-between pb-10">
        <div className="px-2">
          <h1 className="text-red pt-5">Informácie</h1>

          <p className="text-xl pt-10 pr-10">
            PREMIUMetal vyrába garáže najvyššej kvality. Poskytujeme odborné
            poradenstvo a pomoc pri hľadaní najlepšej ponuky. Všetkým zákazníkom
            garantujeme komplexný servis a naši odborníci poskytujú poradenstvo
            od momentu objednávky až po dodanie a montáž našich produktov. Vďaka
            našej širokej ponuke sme schopní uspokojiť potreby aj tých
            najnáročnejších zákazníkov. Ako výrobca prémiových garáží
            poskytujeme vysokú kvalitu spracovania za atraktívnu cenu. Pozrite
            si našu ponuku
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
          <h4 className="text-center">Sklopná, zdvihnutá</h4>
        </div>
        <div>
          <img
            src="/images/otwierana.webp"
            className="w-[350px]"
            alt="podnoszona"
          />
          <h4 className="text-center">Dvojkrídlová</h4>
        </div>
      </div>
      <h2 className="text-center text-white bg-red py-5  ">
      Lisovanie plechu
      </h2>
      <div className="flex py-10 gap-5 justify-evenly px-2">
        <div>
          <img src="/images/pion.webp" alt="pionowe" />
          <h4 className="text-center">Vertikálne</h4>
        </div>
        <div>
          <img src="/images/poziom.webp" alt="poziome" />
          <h4 className="text-center">Horizontálne</h4>
        </div>
      </div>
      <h2 className="text-center text-white bg-red py-5 ">Strešná krytina</h2>
      <div className="flex py-10 justify-evenly">
        <div>
          <img src="/images/dachowka.webp" alt="uchylna" />
          <h4 className="text-center">Plechová strešná krytina</h4>
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
