import React from "react";
import Hero from "../components/galeria/Hero";
import Image from "next/image";
import GaleriaKojce from "../components/kojce/GaleriaKojce";

function page() {
  return (
    <div>
      <Hero title="Koterce pre psov" />
      <div className="flex max-md:flex-wrap gap-5 container mx-auto py-20">
        <Image
          src="/images/kojec_head.jpg"
          alt="kojec1"
          width={500}
          height={500}
        />
        <div className="">
          <h2 className="text-4xl">Koterce pre psov</h2>
          <h3 className="text-black md:pb-10">Pohodlné a bezpečné miesto</h3>
          <p>
            Pohodlné a bezpečné miesto Zabezpečenie bezpečného
            a pohodlného miesta pre vášho psa je mimoriadne dôležité pre jeho
            pohodu. Koterce pre psov sú ideálnym riešením na vytvorenie
            špeciálneho priestoru pre vášho domáceho miláčika, kde môže
            odpočívať, hrať sa a cítiť sa bezpečne. V našej ponuke nájdete rôzne
            koterce, ktoré dokonale vyhovujú potrebám vášho psa. Naše výrobky sú
            pre vášho domáceho miláčika bezpečné a poskytujú mu príjemné
            prostredie po mnoho rokov.
          </p>
          <h4 className="font-semibold pt-5">Zabezpečte svojmu psovi pohodlie s našimi</h4>
          <p>
        
            kotercami Už nečakajte a vyberte si ten najlepší koterec pre svojho
            psa ešte dnes. Zabezpečte mu pohodlné prostredie na odpočinok a hru,
            ktoré podporí jeho pohodu a zdravie. Kontaktujte nás a my vám radi
            pomôžeme vybrať to najlepšie riešenie pre vášho domáceho miláčika!
          </p>         
       
        </div>
      </div>
      <GaleriaKojce />
    </div>
  );
}

export default page;
