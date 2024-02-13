'use client'
import Image from "next/image";
import Link from "next/link";
import { Fade,Slide } from "react-awesome-reveal";
import React, { useState, useEffect } from 'react';

const Hero = () => {
  // const [scale, setScale] = useState(1);
  // const [rotate, setRotate] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //     const newScale = 1 + scrollTop / 1000; // Adjust this to control the rate of scaling
  //     const newRotate = scrollTop / 100; // Adjust this to control the rate of rotation
  //     setScale(newScale);
  //     setRotate(newRotate);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <div className="bg-[url(/images/herov2.webp)] bg-cover flex  bg-no-repeat lg:h-[500px] md:h-[400px] bg-center ">
      <div className="flex md:items-end w-full justify-between  max-md:flex-col relative" >
        <div className="flex  flex-col  items-start justify-center h-full md:pl-[10%] pl-2 max-sm:pt-10">
            <Fade triggerOnce direction="left" delay={500}>
            <h1 className="font-bold max-w-md text-white">Prémium garázsok</h1>
            </Fade>
            <Fade triggerOnce direction="left" delay={1000}>
            <p className="text-2xl text-white max-w-md py-10 max-md:text-lg">Garázsok a  <span className="font-bold">PREMIUMetal</span> <br className="sm:hidden"></br> Otthonod Minősége és Stílusa </p>
            </Fade>
            
        </div>
        {/* <Slide triggerOnce direction="right" delay={1500}>
        <Image src="/images/garaz2.webp" width={800} height={567}  
        className="hover:-translate-x-10 hover:scale-105 transition-all" 
        // style={{ transform: `scale(${scale}) rotateY(${rotate}deg)` }}
        alt="garage" />
        </Slide> */}
        <Fade className="absolute left-[10%]  -bottom-5" triggerOnce delay={1500} style={{ perspective: '1000px' }}>
            <Link href="/kontakt"><button className="btn  bg-red" >Kapcsolat</button></Link>
            </Fade>
    </div>
    
    </div>
  );
}

export default Hero;
