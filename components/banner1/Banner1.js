import Link from "next/link";
import React from "react";

function Banner1() {
  return (
    <div className="relative bg-[url('/12.jpeg')] h-[70vh] bg-no-repeat bg-cover bg-center bg-fixed">
      <div className="absolute bg-black opacity-80 h-full w-full flex justify-center items-center flex-col">
        <h2 className="text-white text-3xl">Welcome To Top Movez Uganda</h2>
        <p className="text-white text-xl py-7">
          We are here to give you a stressless, hassel-free relocation
        </p>
        <Link href="/quote">
          <button
            type="submit"
            className="border text-slate-600 py-2 px-2 hover:bg-blue-500 hover:text-white rounded hover:border-none"
          >
            Get A Quote
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Banner1;
