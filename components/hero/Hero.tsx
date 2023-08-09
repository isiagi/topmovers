import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute w-full h-full bg-[url('https://images.unsplash.com/photo-1600725935160-f67ee4f6084a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG1vdmVyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60')] bg-cover bg-center"></div>
      <div className="w-full h-full flex items-center backdrop-brightness-50">
        <div className="md:px-12 px-2">
          <h1 className="text-5xl font-bold max-w-[600px] text-white">
            WE PROVIDE HIGHEST QUALITY <span className="">MOVING</span> SERVICES
          </h1>
          <Link href="/services">
            <button className="bg-[#277AC4] text-white p-2 font-medium text-[18px] rounded my-3">
              View Services
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
