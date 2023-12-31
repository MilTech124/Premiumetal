'use client'
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

function AboutPremium() {
  return (
    <div id="ofirmie" className="flex   bg-[#2B2D42] text-white px-2">
      <div className="flex flex-wrap container items-center justify-evenly mx-auto md:py-20 py-10">
        <div className="max-w-xl gap">
            <Fade direction="left" triggerOnce>
                <h2>Premiumetal</h2>
            </Fade>
            <Fade direction="left" triggerOnce>
                <h4 className="text-xl font-semibold pt-2 pb-5">
                    Pasja do Perfekcji w Tworzeniu Garaży
                </h4>
            </Fade>
            <Fade direction="left" triggerOnce>
          <p>
            W Premiumetal cenimy jakość, innowacyjność i dbałość o detale. Nasz
            zespół składa się z wykwalifikowanych specjalistów, którzy są
            zaangażowani w dostarczanie produktów i usług najwyższej klasy.
            Naszym celem jest przekraczanie oczekiwań klientów i ciągłe
            doskonalenie naszych garaży, aby były one nie tylko praktyczne, ale
            również inspirujące. Zapraszamy do współpracy i odkrycia, jak nasze
            garaże mogą przekształcić przestrzeń Twojego domu.
          </p>
          <p className="md:pt-10 pt-5">
            Zapraszamy do współpracy i odkrycia, jak nasze garaże mogą
            przekształcić przestrzeń Twojego domu.
          </p>
            </Fade>
        </div>
        <Fade className="min-w-[450px] max-sm:p-10">
          <Image
            src="/images/garagepremium.png"
            width={470}
            height={343}
            alt="garage"
          />
        </Fade>
      </div>
    </div>
  );
}

export default AboutPremium;
