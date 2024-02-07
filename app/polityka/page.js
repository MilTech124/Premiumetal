import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center flex-1 container text-center">
        <h1 className="text-6xl font-bold">Polityka prywatności</h1>

        <p className="mt-3 text-2xl">Polityka Prywatności firmy PREMIUMetal</p>

        <div className="mt-3 flex flex-col gap-5 text-black text-lg text-left">
          <div>
            {" "}
            <h3 className="text-black">Wprowadzenie</h3>
            <p className="text-sm">
              Firma PREMIUMetal ceni prywatność swoich klientów i zobowiązuje
              się do ochrony ich danych osobowych. Niniejsza Polityka
              Prywatności wyjaśnia, jakie informacje zbieramy, jak je
              wykorzystujemy i jakie prawa mają nasi klienci w związku z ich
              danymi osobowymi.
            </p>
          </div>

          <div>
            {" "}
            <h3 className="text-black">Jakie informacje zbieramy?</h3>
            <p className="text-sm">
              Zbieramy informacje, które są niezbędne do realizacji naszych
              usług, takie jak imię i nazwisko, adres e-mail, numer telefonu
              oraz adres dostawy.
            </p>
          </div>
          <div>
            <h3 className="text-black">Jak wykorzystujemy te informacje?</h3>
            <p className="text-sm">
              Informacje, które zbieramy, są wykorzystywane wyłącznie do celów
              realizacji zamówień, obsługi klienta oraz do celów statystycznych
              i analitycznych.
            </p>
          </div>
          <div>
            {" "}
            <h3 className="text-black">Jak zabezpieczamy Twoje dane?</h3>
            <p className="text-sm">
              Zastosowaliśmy odpowiednie środki techniczne i organizacyjne, aby
              chronić Twoje dane przed utratą, zmianą, kradzieżą lub dostępem
              osób nieuprawnionych.
            </p>
          </div>

          <div>
            {" "}
            <h3 className="text-black">Jakie są Twoje prawa?</h3>
            <p className="text-sm">
              Masz prawo do dostępu do swoich danych, ich poprawiania,
              usunięcia, ograniczenia przetwarzania, prawo do przenoszenia
              danych, prawo do wniesienia sprzeciwu wobec przetwarzania danych
              oraz prawo do wniesienia skargi do organu nadzorczego.
            </p>
          </div>
          <div>
            <h3 className="text-black">Kontakt</h3>
            <p className="text-sm">
              Jeśli masz pytania dotyczące naszej Polityki Prywatności,
              skontaktuj się z nami pod adresem: kontakt@premiumetal.com
            </p>
          </div>
        </div>

        
      </main>
    </div>
  );
}
