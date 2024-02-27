import React from "react";
import Image from "next/image";

function SmallItem({ number, title,image }) {
  return (
    <div className="z-20 md:mr-10 ">
      <div className="flex">
        <p className="rounded-full max-sm:ml-1 text-center bg-red flex items-center justify-center -ml-5 -mb-5  w-10 h-10 text-lg text-white font-bold z-10 hover:bg-red-400 ">{number}</p>
       
      </div>
      <div className=" relative  small-item">
        <Image src={image} width={200} height={200} className="max-sm:w-[200px] max-sm:h-[100px] object-cover max-sm:ml-5" alt={title} />
        <h3 className="drop-shadow-md text-red text-[18px] text-center">{title}</h3>
      </div>
    </div>
  );
}

export default SmallItem;