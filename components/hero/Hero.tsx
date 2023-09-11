import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="relative w-full md:h-screen h-[60vh] overflow-hidden">
      <div className="absolute w-full h-full bg-[url('/11.jpeg')] bg-cover bg-center"></div>
      <div className="w-full h-full flex items-center backdrop-brightness-50">
        <div className="md:px-12 px-2">
          <h1 className="md:text-5xl text-3xl font-bold max-w-[600px] text-white">
            WE PROVIDE HIGHEST QUALITY <span className="">MOVING</span> SERVICES
          </h1>
          <Link href="/services">
            <button className="bg-[#277AC4] border-2 border-[#277AC4] text-white p-2 font-medium text-[18px] rounded my-3 hover:bg-transparent hover:border-2 hover:border-[#277AC4] hover:text-[#fff]">
              View Services
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
