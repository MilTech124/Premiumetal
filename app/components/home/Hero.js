import React from "react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className="bg-[url(/images/hero.png)] bg-cover flex  bg-no-repeat md:h-[800px] bg-bottom pb-20 ">
      <div className="flex items-end w-full justify-between  max-md:flex-col">
        <div className="flex flex-col items-start justify-center h-full md:pl-[10%] pl-2 max-sm:pt-10">
            <h1 className="font-bold max-w-md text-white">Garaże <br />Klasy Premium </h1>
            <p className="text-2xl text-white max-w-md py-10 max-md:text-lg">Wyjątkowe Garaże od Premiumetal Jakość i Styl dla Twojego Domu</p>
            <Link href="/kontakt"><button className="btn bg-red">Kontakt</button></Link>
        </div>
        <Image src="/images/garaz.png" width={800} height={567}  className="hover:-translate-x-10 hover:scale-105 transition-all" alt="garage" />
    </div>
    
    </div>
  );
}

export default Hero;
