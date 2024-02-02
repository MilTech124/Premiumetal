"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

function AboutPremium() {
  return (
    <div id="ofirmie">
      <div className="flex gap-5 justify-center items-center">
        <img className="w-24" src="/PREMIUM.jpg" alt="logo" />
        <Fade direction="left" triggerOnce>
          <h2 className="text-center text-red">
            PREMIU<span className="text-black">Mmetal</span>
          </h2>
        </Fade>
      </div>
      <div className="flex">
        <div className="flex flex-wrap container items-center justify-center mx-auto ">
          <Fade className="md:w-1/2">
            <img src="/images/garaz_premium.webp" className="w-full" alt="garage" />            
          </Fade>
          <div className="md:w-1/2 h-full max-md:h-fit text-white p-5 bg-black">
            <Fade direction="right" >
              <h4 className="text-xl font-semibold pt-2 pb-5">
                Pasja do Perfekcji w Tworzeniu Garaży
              </h4>
            </Fade>
            <Fade direction="right" delay={300} className="text-xl">
              <p>
                W <b>PREMIUMetal</b> cenimy jakość, innowacyjność i dbałość o detale.
                Nasz zespół składa się z wykwalifikowanych specjalistów, którzy
                są zaangażowani w dostarczanie produktów i usług najwyższej
                klasy. Naszym celem jest przekraczanie oczekiwań klientów i
                ciągłe doskonalenie naszych garaży, aby były one nie tylko
                praktyczne, ale również inspirujące. Zapraszamy do współpracy i
                odkrycia, jak nasze garaże mogą przekształcić przestrzeń Twojego
                domu.
              </p>
              <p className="md:pt-10 pt-5">
                Zapraszamy do współpracy i odkrycia, jak nasze garaże mogą
                przekształcić przestrzeń Twojego domu.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPremium;
