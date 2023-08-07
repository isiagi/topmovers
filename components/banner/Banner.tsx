import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { PiTiktokLogoBold } from "react-icons/pi";
import { BsWhatsapp } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import Link from "next/link";

function Banner() {
  return (
    <div className="bg-gray-100 md:block hidden">
      <div className="flex flex-wrap justify-between py-3 md:px-12 px-2">
        <div className="flex gap-5 flex-wrap">
          <div className="flex items-center gap-2">
            <div className="bg-red-400 p-1 rounded text-white">
              <BiPhoneCall />
            </div>
            <p className="text-slate-600">+256789645572446</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-red-400 p-1 rounded text-[#096FC2]">
              <HiOutlineMail />
            </div>
            <p className="text-slate-600">topmoverz@gmail.com</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/">
            <div className="bg-red-400 p-1 rounded text-[#096FC2] bg-transparent">
              <PiTiktokLogoBold />
            </div>
          </Link>
          <div className="bg-red-400 p-1 rounded text-[#096FC2] bg-transparent">
            <BsWhatsapp />
          </div>
          <div className="bg-red-400 p-1 rounded text-[#096FC2] bg-transparent">
            <FiFacebook />
          </div>
          <div className="bg-red-400 p-1 rounded text-[#096FC2] bg-transparent">
            <BsInstagram />
          </div>
          <div className="bg-red-400 p-1 rounded text-[#096FC2] bg-transparent">
            <FiTwitter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
