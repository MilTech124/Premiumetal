import React from "react";

function page() {
  return (
    <div className="mx-auto container">
      <div className="flex max-md:flex-wrap max-md:-order-2 justify-between">
        <div className="px-2">
          <h1 className="text-red pt-5">Dodatkowe akcesoria</h1>

          <p className="text-xl pt-10 pr-10">
            Zamawiając garaż blaszany warto pomyśleć o zakupie dodatkowych
            akcesoriów, które nie tylko ulepszą twój garaż, ale uczynią go
            bardziej praktycznym w użytkowaniu.
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
            <h4>Drzwi</h4>
            <p>Zalety dodatkowych drzwi:</p>
            <ul className="list-disc list-inside">
              <li>Ułatwiają funkcjonalność i użytkowanie garażu</li>
              <li>Drzwi są wyposażone w zamek z dwoma kluczami</li>
              <li>Montowane na dowolnej ścianie garażu</li>
              <li>Wymiary 90 cm szerokości i 200 cm wysokośc</li>
            </ul>
          </div>
          <img src="/images/door.webp" className=" md:w-60 w-20 pt-10 h-full" alt="" />
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
            <h4>Dodatkowe okno</h4>
            <p>Dane techniczne okna:</p>
            <ul className="list-disc list-inside">
              <li>Materiał: PCV</li>
              <li>Szyba pojedyncza</li>
              <li>Wymiar 60x80 cm lub 60x100</li>
              <li>Dostępne różne kolory</li>
            </ul>
          </div>
          <img src="/images/okno.webp" className="md:w-60 w-20 pt-10 h-full" alt="" />
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
            <h4>Okucia</h4>            
            <ul className="list-disc list-inside">
              <li>Okucia poprawiają estetykę wykończenia garażu</li>
              <li>Stosuje się je po zewnetrznej stronie narozników garażu</li>
              <li>Można też je stosować do wykończenia dachu z przodu i tyłu garażu</li>
              <li>Okucia dobierane są pod kolor garażu lub z palety kolorów</li>
            </ul>
          </div>
          <img src="/images/okucie2.webp" className="md:w-60 w-20 pt-10 h-full" alt="" />
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
            <h4>Rynny</h4>  
            <p>Zalety rynien PCV:</p>          
            <ul className="list-disc list-inside">
              <li>Produkcja z najwyższej jakości tworzyw sztucznych</li>
              <li>Wysoka odporność produktów na warunki atmosferyczne</li>
              <li>Najwyższa estetyka wykonania, precyzja w połączeniach odcinków rynien oraz rur</li>
           
            </ul>
          </div>
          <img src="/images/orynnowanie.webp" className="md:w-60 w-20 pt-10 h-full" alt="" />
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
            <h4>Automat do bramy</h4>   
            <p>W skład zestawu wchodzi</p>        
            <ul className="list-disc list-inside">
              <li>1 siłownik HOME z wbudowaną centralą i odbiornikiem</li>
              <li>1 szyna z napędem łańcuchowym</li>
              <li>2 piloty 2-kanałowe</li>           
            </ul>
          </div>
          <img src="/images/automat.webp" className="md:w-60 w-20 pt-10 h-full" alt="" />
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
            <h4>Nity i śruby</h4>      
            <p>Dbamy o najmniejsze detale, dlatego w celu zwiększenia
             wartości estetycznej garażu, używamy nitów i śrub w kolorze
              zgodnym z kolorem blachy garażowej.</p>      
            <ul className="list-disc list-inside">
              <li>Dopasowane do koloru garażu</li>             
            </ul>
          </div>
          <img src="/images/nity.webp" className="md:w-60 w-20 pt-10 h-full" alt="" />
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
            <h4>Filc antykondensacyjny</h4>  
            <ul className="list-disc list-inside">
              <li>Zapobiega skraplaniu się wody</li>             
            </ul>
          </div>
          <img src="/images/filc.webp" className="md:w-60 w-20 pt-10 h-full" alt="" />
        </div>
        {/* ITEM 7 */}
      </div>
    </div>
  );
}

export default page;
