'use client'
import { Fade } from "react-awesome-reveal";

function page() {
  return (
    <main className="bg-[url(/images/bg-kontakt.png)] bg-cover flex flex-col bg-no-repeat  bg-center py-10  md:pl-[10vw]">
      <h1 className="text-slate-100">Kapcsolat</h1>

      <div className="py-20 flex flex-col gap-10">
        {/* ITEM */}
        <Fade>
        <div className="flex gap-2 group w-fit">
          <div className=" flex justify-center items-center h-20 w-20 rounded-full bg-primary group-hover:bg-red-600  group-hover:rotate-12 transition-all duration-700">
            <img src="/images/cellphone.png" alt="mobile" className="p-2" />
          </div>
          <div className="flex gap-2 flex-col items-center justify-center bg-primary rounded-md px-10 font-semibold group w-[250px]">
            <a href="tel:+36305102127">+36 30 510 21 27</a>            
            <a href="tel:+36304263006">+36 30 426 30 06</a>            
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
            <a href="mailto:garazsok@premiumetal.hu ">garazsok@premiumetal.hu </a>
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
            <p className="font-semibold text-center">Nyitva tartás:</p>
            <p className="text-center">Hétfőtől - Péntekig: 8:00 - 16:00</p>
            <p className="text-center">Szombaton: <br></br>9:00 - 13:00</p>            
          </div>
        </div>
        </Fade>
        {/* ITEM */}

        {/* ITEM */}
        <Fade>
        <div className="bg-primary w-[350px] rounded-md p-5">
          <p className="font-semibold">Készen áll arra, hogy megvalósítsuk álmai garázsát?</p>
          <p className="font-normal pt-5">
          Már ma vegye fel velünk a kapcsolatot, hogy egyeztethessünk Önnel az ideális garázsáról!
          <br></br> Rendelkezésére állunk, hogy segítségére lehessünk!
          </p>
        </div>
        </Fade>
        {/* ITEM */}
      </div>
    </main>
  );
}

export default page;
