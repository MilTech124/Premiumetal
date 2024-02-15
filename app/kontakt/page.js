"use client";
import { Fade } from "react-awesome-reveal";

function page() {
  return (
    <main className="bg-[url(/images/bg-kontakt.png)] bg-cover flex flex-col bg-no-repeat  bg-center py-10  md:pl-[10vw]">
      <h1 className="text-slate-100">Kontakt</h1>

      <div className="py-20 flex flex-col gap-10">
        {/* ITEM */}
        <Fade>
          <div className="flex gap-2 group w-fit">
            <div className=" flex justify-center items-center h-20 w-20 rounded-full bg-primary group-hover:bg-red-600  group-hover:rotate-12 transition-all duration-700">
              <img src="/images/cellphone.png" alt="mobile" className="p-2" />
            </div>
            <div className="flex gap-2 flex-col items-center justify-center bg-primary rounded-md px-10 font-semibold group w-[250px]">
              <a href="tel:+421 951 544 850">+421 951 544 850</a>
            </div>
          </div>
        </Fade>
        {/* ITEM */}
        {/* ITEM */}
        <Fade>
          <div className="flex gap-2 group w-fit">
            <div className=" flex justify-center items-center h-20 w-20 rounded-full bg-primary group-hover:bg-red-600  group-hover:rotate-12 transition-all duration-700">
              <img src="/images/Email.png" alt="mobile" className="p-2" />
            </div>
            <div className="flex gap-2 flex-col items-center justify-center bg-primary rounded-md px-10 font-semibold group w-[250px]">
              <a href="mailto:garaze@premiumetal.sk">garaze@premiumetal.sk</a>
            </div>
          </div>
        </Fade>

        {/* ITEM */}
        {/* ITEM */}
        <Fade>
          <div className="flex gap-2 group w-fit">
            <div className=" flex justify-center items-center h-20 w-20 rounded-full bg-primary group-hover:bg-red-600  group-hover:rotate-12 transition-all duration-700">
              <img src="/images/Clock.png" alt="mobile" className="p-2" />
            </div>
            <div className="flex gap-2 flex-col items-center justify-center bg-primary rounded-md px-10 p-2 font-normal group w-[250px]">
              <p className="font-semibold">Otváracie hodiny:</p>
              <p>Pon- Pi: 8:00 - 16:00</p>
              <p>Sob: 9:00 - 13:00 hod</p>
            </div>
          </div>
        </Fade>
        {/* ITEM */}

        {/* ITEM */}
        <Fade>
          <div className="bg-primary w-[350px] rounded-md p-5">
            <p className="font-semibold">Ste pripravení na garáž svojich snov?</p>
            <p className="font-normal pt-5">
            Kontaktujte nás ešte dnes, aby sme prediskutovali vaše potreby a začali vytvárať vašu dokonalú garáž! Sme tu, aby sme vám pomohli na každom kroku.
            </p>
          </div>
        </Fade>
        {/* ITEM */}
      </div>
    </main>
  );
}

export default page;
