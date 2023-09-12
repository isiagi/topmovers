import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { PiTiktokLogoBold } from "react-icons/pi";
// import { BsWhatsapp } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { RiTwitterLine } from "react-icons/ri";
import Link from "next/link";

function Banner() {
  return (
    <div className="bg-gray-100 md:block hidden">
      <div className="flex flex-wrap justify-between py-3 md:px-12 px-2">
        <div className="flex gap-5 flex-wrap">
          <a href="tel:+256742891524">
            <div className="flex items-center gap-2">
              <div className="bg-red-400 p-1 rounded text-white">
                <BiPhoneCall />
              </div>
              <p className="text-slate-600">+256742891524/+256783559665</p>
            </div>
          </a>
          <div className="flex items-center gap-2">
            <div className="bg-red-400 p-1 rounded text-[#096FC2]">
              <HiOutlineMail />
            </div>
            <a href="mailto:topmoversug@gmail.com">
              <p className="text-slate-600">topmoversug@gmail.com</p>
            </a>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/">
            <div className="bg-red-400 p-1 rounded text-[#096FC2] bg-transparent">
              <PiTiktokLogoBold />
            </div>
          </Link>
          <Link
            href={"https://www.linkedin.com/in/top-movers-uganda-831176290"}
            target="_blank"
          >
            <div className="bg-red-400 p-1 rounded text-[#096FC2] bg-transparent">
              <BiLogoLinkedinSquare />
            </div>
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=100063519168714"
            target="_blank"
          >
            <div className="bg-red-400 p-1 rounded text-[#096FC2] bg-transparent">
              <FiFacebook />
            </div>
          </Link>
          <div className="bg-red-400 p-1 rounded text-[#096FC2] bg-transparent">
            <BsInstagram />
          </div>
          <Link href={"https://twitter.com/TopmoversUg?s=09"} target="_blank">
            <div className="bg-red-400 p-1 rounded text-[#096FC2] bg-transparent">
              <RiTwitterLine />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
