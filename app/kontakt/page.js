import React from "react";

function page() {
  return (
    <main className="bg-[url(/images/bg-kontakt.png)] bg-cover flex flex-col bg-no-repeat  bg-center py-10  md:pl-[10vw]">
      <h1 className="text-slate-100">Kontakt</h1>

      <div className="py-20 flex flex-col gap-10">
        {/* ITEM */}
        <div className="flex gap-2 group w-fit">
          <div className=" flex justify-center items-center h-20 w-20 rounded-full bg-primary group-hover:bg-red-600  group-hover:rotate-12 transition-all duration-700">
            <img src="/images/cellphone.png" alt="mobile" className="p-2" />
          </div>
          <div className="flex gap-2 flex-col items-center justify-center bg-primary rounded-md px-10 font-semibold group w-[250px]">
            <a href="tel:+48 517330176">+48 517 330 176</a>
            <a href="tel:+48 665983244">+48 665 983 244</a>
          </div>
        </div>
        {/* ITEM */}
        {/* ITEM */}
        <div className="flex gap-2 group w-fit">
          <div className=" flex justify-center items-center h-20 w-20 rounded-full bg-primary group-hover:bg-red-600  group-hover:rotate-12 transition-all duration-700">
            <img src="/images/Email.png" alt="mobile" className="p-2" />
          </div>
          <div className="flex gap-2 flex-col items-center justify-center bg-primary rounded-md px-10 font-semibold group w-[250px]">
            <a href="mailto:garaze@premiumetal.pl">garaze@premiumetal.pl</a>
          </div>
        </div>
        {/* ITEM */}
        {/* ITEM */}
        <div className="flex gap-2 group w-fit">
          <div className=" flex justify-center items-center h-20 w-20 rounded-full bg-primary group-hover:bg-red-600  group-hover:rotate-12 transition-all duration-700">
            <img src="/images/Clock.png" alt="mobile" className="p-2" />
          </div>
          <div className="flex gap-2 flex-col items-center justify-center bg-primary rounded-md px-10 p-2 font-normal group w-[250px]">
            <p className="font-semibold">Godziny Pracy:</p>
            <p>pn-pt: 8:00 -16:00</p>
            <p>sob: 9:00-13:00</p>
            <p>niedz: nieczynne</p>
          </div>
        </div>
        {/* ITEM */}

        {/* ITEM */}
        <div className="bg-primary w-[350px] rounded-md p-5">
          <p className="font-semibold">Gotowy na Garaż Swoich Marzeń?</p>
          <p className="font-normal pt-5">
            Skontaktuj się z nami już dziś, aby omówić Twoje potrzeby i zacząć
            tworzyć idealny garaż!<br></br> Jesteśmy tutaj, aby pomóc Ci każdym krokiem.
          </p>
        </div>
      </div>
    </main>
  );
}

export default page;
