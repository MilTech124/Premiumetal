'use client'
import Image from "next/image";
import Link from "next/link";
import { Fade,Slide } from "react-awesome-reveal";

function Hero() {
  return (
    <div className="bg-[url(/images/hero2.webp)] bg-cover flex  bg-no-repeat lg:h-[500px] md:h-[600px] bg-bottom ">
      <div className="flex items-end w-full justify-between  max-md:flex-col relative" >
        <div className="flex  flex-col  items-start justify-center h-full md:pl-[10%] pl-2 max-sm:pt-10">
            <Fade triggerOnce direction="left" delay={500}>
            <h1 className="font-bold max-w-md text-white">Garaże <br />Klasy Premium </h1>
            </Fade>
            <Fade triggerOnce direction="left" delay={1000}>
            <p className="text-2xl text-white max-w-md py-10 max-md:text-lg">Wyjątkowe Garaże od Premiumetal Jakość i Styl dla Twojego Domu</p>
            </Fade>
            
        </div>
        <Slide triggerOnce direction="right" delay={1500}>
        <Image src="/images/garaz.webp" width={800} height={567}  className="hover:-translate-x-10 hover:scale-105 transition-all" alt="garage" />
        </Slide>
        <Fade triggerOnce delay={1500}>
            <Link href="/kontakt"><button className="btn md:absolute left-[10%]  -bottom-5  bg-red">Kontakt</button></Link>
            </Fade>
    </div>
    
    </div>
  );
}

export default Hero;
