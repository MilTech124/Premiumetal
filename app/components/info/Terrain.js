import React from "react";

function Terrain() {
  return (
    <div className="container justify-center p-3 items-center flex flex-col">
      <h2 className="py-5">Przygotowanie Podłoża</h2>
      <h3 className="text-slate-800 text-center text-4xl">Wyrównanie Terenu</h3>
      <p className="max-w-2xl pb-20">
        Kluczowe jest wyrównanie i wypoziomowanie terenu pod garaż. Preferujemy
        wykonanie wylewki betonowej o wymiarach większych o około 20 cm od
        planowanych wymiarów garażu. Jest to ważne dla zapewnienia stabilności
        konstrukcji.
      </p>
      <div className="flex flex-wrap justify-center">
        <div>
          <h3 className="text-slate-800 py-5 text-4xl">Wylewka betonowa</h3>
          <p className="max-w-2xl ">
            Zalecamy wykonanie wylewki betonowej, szczególnie gdy garaż będzie
            służyć jako miejsce parkingowe dla samochodu. Wylewka powinna być
            większa o 15-30 cm od każdego boku garażu, z optymalną głębokością
            warstwy betonu wynoszącą około 10-15 cm
          </p>
        </div>
        <img src="/images/wylewka.png" alt="" />
      </div>
      <div className="flex flex-wrap justify-center">
        <div>
          <h3 className="text-slate-800 py-5 text-4xl">Bloczki betonowe</h3>
          <p className="max-w-2xl ">
            Dla tymczasowych rozwiązań lub garaży służących jako schowki,
            wystarczające mogą być bloczki betonowe umieszczone pod ścianami
            garażu. Są one niedrogie i łatwe w montażu. Bloczki powinny być
            rozmieszczone równomiernie po obwodzie garażu, a ich liczba
            optymalna to 6 sztuk. Ważne jest staranne wypoziomowanie i wykopanie
            niewielkich otworów pod bloczki.
          </p>
        </div>
        <img src="/images/bloczki.png" alt="" />
      </div>
      <div className="flex flex-wrap items-center justify-center">
        <div>
          <h3 className="text-slate-800 py-5 text-4xl">Fundament po obrysie</h3>
          <p className="max-w-2xl ">
            Przygotowanie fundamentu po obrysie garażu blaszanego jest kluczowe
            dla zapewnienia jego stabilności. Ten rodzaj fundamentu jest
            szczególnie polecany dla trwalszych konstrukcji garażowych. Oto
            podstawowe kroki:
            <br /><br />1. Wytyczanie Obrysu: Najpierw dokładnie wytycz obrys
            przyszłego garażu, dodając dodatkowy margines około 20-30 cm na
            każdym boku. <br />2. Wykop i Formowanie: Następnie wykonaj wykop wzdłuż tego
            obrysu. Głębokość i szerokość wykopu powinny być odpowiednie do
            wielkości i ciężaru planowanego garażu. <br />3. Zbrojenie i Betonowanie: W
            wykopie umieść zbrojenie, a następnie zalej całość betonem, co
            zapewni dodatkową wytrzymałość. <br />4. Wyrównanie i Drenaż: Po zastygnięciu
            betonu wyrównaj powierzchnię fundamentu i upewnij się, że zapewniony
            jest właściwy drenaż.
          </p>
        </div>
        <img src="/images/fundament.png" className="h-full" alt="" />
      </div>
    </div>
  );
}

export default Terrain;
