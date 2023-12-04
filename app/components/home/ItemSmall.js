import React from "react";
import Image from "next/image";

function SmallItem({ number, title,image }) {
  return (
    <div className="cursor-pointer z-20">
      <div className="flex">
        <p className="rounded-full text-center bg-red-800 flex items-center justify-center -ml-5 -mb-5  w-10 h-10 text-lg text-white font-bold z-10 hover:bg-red-400 ">{number}</p>
        <h3 className="drop-shadow-md max-sm:text-black">{title}</h3>
      </div>
      <div className=" relative  small-item">
        <Image src={image} width={200} height={200} className="max-sm:w-[100px]" />
      </div>
    </div>
  );
}

export default SmallItem;
