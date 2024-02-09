"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

function AboutPremium() {
  return (
    <div id="ofirmie">
      <div className="flex md:gap-5 justify-center items-center">
        <img className="w-24" src="/PREMIUM.jpg" alt="logo" />
        <Fade direction="left" triggerOnce>
          <h2 className="text-center text-red">
            PREMIU<span className="text-black">Metal</span>
          </h2>
        </Fade>
      </div>
      <div className="flex">
        <div className="flex flex-wrap container items-center justify-center mx-auto ">
          <Fade className="md:w-1/2">
            <img src="/images/About_premium.webp" className="w-full" alt="garage" />            
          </Fade>
          <div className="md:w-1/2 h-full max-md:h-fit text-white p-5 bg-black">
            <Fade direction="right" >
              <h4 className="text-xl font-semibold pt-2 pb-5">
              Garázsépítésben Tökéletesség iránti Elhivatottság
              </h4>
            </Fade>
            <Fade direction="right" delay={300} className="text-xl">
              <p>
              A <b>PREMIUMetal</b> nagyra értékeljük a minőséget, az innovációt és a részletekre való odafigyelést. Csapatunk képzett szakemberekből áll, akik elkötelezettek az első osztályú termékek és szolgáltatások nyújtása iránt. Célunk az ügyfeleink elvárásainak túlszárnyalása, valamint a garázsaink folyamatosan fejlesztése, hogy azok ne csak praktikusak, hanem inspirálóak is legyenek.
              </p>
              <p className="md:pt-10 pt-5">
              Szeretettel várunk, fedezd fel, hogyan tudják garázsaink átalakítani otthonod terét.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPremium;
