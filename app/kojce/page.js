import React from "react";
import Hero from "../components/galeria/Hero";
import Image from "next/image";
import GaleriaKojce from "../components/kojce/GaleriaKojce";

function page() {
  return (
    <div>
      <Hero title="Kotec pro psy" />
      <div className="flex max-md:flex-wrap gap-5 container mx-auto py-20">
        <Image
          src="/images/kojec_head.jpg"
          alt="kojec1"
          width={500}
          height={500}
        />
        <div className="">
          <h2 className="text-4xl">Kotec pro psy</h2>
          <h3 className="text-black md:pb-10">pohodlné a bezpečné místo</h3>
          <p>
            Zajistit psovi bezpečné a pohodlné místo je pro jeho pohodu nesmírně
            důležité. Kotce pro psy jsou ideálním řešením pro vytvoření
            speciálního prostoru pro odpočinek, hru a pocit bezpečí vašeho
            mazlíčka. V naší nabídce najdete různé kotce, které dokonale
            vyhovují potřebám vašeho psa.Naše výrobky jsou pro vašeho mazlíčka
            bezpečné a poskytují mu příjemné prostředí po mnoho let.
          </p>
          <h4 className="font-semibold pt-5">
            Zajistěte svému psovi pohodlí s našimi kotci
          </h4>
          <p>
            Nečekejte déle a vyberte si ten nejlepší kotec pro svého psa ještě
            dnes. Zajistěte mu pohodlné prostředí pro odpočinek a hry, které
            podpoří jeho pohodu a zdraví. Kontaktujte nás a my vám rádi pomůžeme
            vybrat to nejlepší řešení pro vašeho mazlíčka!
          </p>
        </div>
      </div>
      <GaleriaKojce />
    </div>
  );
}

export default page;
