import React from "react";

function page() {
  return (
    <div className="mx-auto container">
      <div className="flex max-md:flex-wrap max-md:-order-2 justify-between">
        <div className="px-2">
          <h1 className="text-red pt-5">Przygotowanie podłoża</h1>
          <h4 className="pt-5 pb-2">Wyrównanie Terenu</h4>
          <p className="text-xl pr-10">
            Kluczowe jest wyrównanie i wypoziomowanie terenu pod garaż.
            Preferujemy wykonanie wylewki betonowej o wymiarach większych o
            około 20 cm od planowanych wymiarów garażu. Jest to ważne dla
            zapewnienia stabilności konstrukcji.
          </p>
        </div>
        <img src="/images/przygotowanie-baner.webp" className=" w-[400px] max-md:-order-1" alt="" />
      </div>

      <div className="flex max-sm:flex-wrap gap-5 pb-10 items-center pt-10 justify-evenly text-center">
        {/* ITEM 1 */}
        <div className="bg-szary p-5 flex flex-col items-center justify-between  h-[470px] max-w-[350px]">
          <div>
            <h4>Wylewka betonowa</h4>
            <p>
              Zalecamy wykonanie wylewki betonowej, szczególnie gdy garaż będzie
              służyć jako miejsce parkingowe dla samochodu. Wylewka powinna być
              większa o 15-30 cm od każdego boku garażu, z optymalną głębokością
              warstwy betonu wynoszącą 10-15cm.
            </p>
          </div>
          <img src="/images/wylewka_betonowa.webp" className="w-[200px]" alt="" />
        </div>
        {/* ITEM 1 */}
        {/* ITEM 2 */}
        <div className="bg-szary p-5 flex flex-col items-center justify-between  h-[470px] max-w-[350px]">
          <div>
            <h4>Bloczki betonowe</h4>
            <p>
              Dla tymczasowych rozwiązań lub garaży służących jako schowki,
              wystarczające mogą być bloczki betonowe umieszczone pod ścianami
              garażu. Są one niedrogie i łatwe w montażu. Bloczki powinny być
              rozmieszczone równomiernie po obwodzie garażu, a ich liczba
              optymalna to 6 sztuk. Ważne jest staranne wypoziomowanie i
              wykopanie niewielkich otworów pod bloczki.
            </p>
          </div>
          <img src="/images/betonowe_bloczki.webp" className="w-[200px]" alt="" />
        </div>
        {/* ITEM 2 */}
        {/* ITEM 3 */}
        <div className="bg-szary p-5  flex flex-col items-center justify-between  h-[470px] max-w-[350px]">
          <div>
            <h4>Fundament po obrysie</h4>
            <p>
              Przygotowanie fundamentu po obrysie garażu blaszanego jest
              kluczowe dla zapewnienia jego stabilności. Ten rodzaj fundamentu
              jest szczególnie polecany dla trwalszych konstrukcji garażowych.
            </p>
          </div>
          <img src="/images/fundament_obrys.webp" className="w-[200px]" alt="" />
        </div>
        {/* ITEM 3 */}
      </div>
    </div>
  );
}

export default page;
