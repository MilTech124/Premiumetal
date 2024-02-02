import React from "react";
import Hero from "./components/home/Hero";
import ItemsSmallContainer from "./components/home/ItemsSmallContainer";
import HomeRealization from "./components/home/HomeRealization";
import AboutPremium from "./components/home/AboutPremium";
import SelfConfigGarage from "./components/home/SelfConfigGarage";
import HomeAccesories from "./components/home/HomeAccesories";

function page() {
  return (
    <div>
      <Hero />
      <div className="w-full">
        <div className="flex pt-20 justify-end">
          <ItemsSmallContainer />{" "}
        </div>

        <div className="w-full bg-szary h-[75px] -mt-[55px]"></div>
      </div>
      <HomeRealization />
      <AboutPremium />

      <SelfConfigGarage />
      <HomeAccesories />
    </div>
  );
}

export default page;
