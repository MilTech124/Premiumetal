import React from "react";
import Image from "next/image";


function Colours() {
  return (
    <div className="flex flex-wrap py-10 mx-auto container px-2">
      <div className="md:w-1/2">
        <h2>Nasza Paleta Kolorów</h2>
        <h4 className="text-xl font-semibold pt-1 pb-5">
          Spełniamy Twoje Wizje
        </h4>
        <p>
          W Premiumetal rozumiemy, jak ważne jest dopasowanie koloru garażu do
          stylu i charakteru Twojej nieruchomości. Dlatego oferujemy szeroką
          gamę kolorów z palety RAL, co pozwala na idealne zgranie z
          architekturą Twojego domu oraz otoczeniem.
        </p>

        <ul className="list-disc pt-5">
          Kolory według Palety <span className="font-bold">RAL</span>:
          <li className="ml-5">
            Nasza oferta kolorów RAL obejmuje całe spektrum, od klasycznych
            bieli i szarości po bardziej wyraziste barwy.
          </li>
          <li className="ml-5">
            Dzięki zastosowaniu wysokiej jakości powłok, gwarantujemy trwałość i
            odporność kolorów na warunki atmosferyczne.
          </li>
        </ul>
        <ul className="list-disc pt-5">
        Opcje <span className="font-bold">Drewnopodobne</span>:
          <li className="ml-5">
          Aby sprostać oczekiwaniom miłośników naturalnych wykończeń, oferujemy również garaże w odcieniach drewnopodobnych.
          </li>
          <li className="ml-5">
          Nasze wykończenia imitujące drewno łączą w sobie ciepło i estetykę naturalnego materiału z wytrzymałością i łatwością konserwacji.

          </li>
        </ul>
        <ul className="list-disc pt-5">
        Indywidualne Dopasowanie:
          <li className="ml-5">
          Zapewniamy możliwość indywidualnego doboru kolorów, aby każdy garaż był unikatowy i odzwierciedlał osobisty styl naszych klientów.
          </li>
          <li className="ml-5">
          Nasi eksperci są do Twojej dyspozycji, aby pomóc w wyborze idealnego odcienia i zapewnić, że finalny produkt będzie dokładnie taki, jakiego potrzebujesz.
          </li>
        </ul>
      </div>
      <div>
      <img src="/images/image 1.png" alt="" />
      <img src="/images/image 3.png" alt="" />
      <img src="/images/image 2.png" alt="" />
      </div>
    </div>
  );
}

export default Colours;
