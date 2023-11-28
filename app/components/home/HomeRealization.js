import React from "react";
import ItemRealization from "../ItemRealization";

function HomeRealization() {
  return (
    <div>
      <h2>Przykładowe realizacje</h2>
      <p>
        W Premiumetal każda realizacja jest odzwierciedleniem naszej pasji i
        zaangażowania w tworzenie wyjątkowych garaży. Od malowniczych
        lokalizacji wiejskich po dynamiczne środowiska miejskie, nasze projekty
        są zawsze dostosowane do unikalnych potrzeb i preferencji naszych
        klientów.
      </p>

      <div>
        
        <ItemRealization />
      </div>
    </div>
  );
}

export default HomeRealization;
