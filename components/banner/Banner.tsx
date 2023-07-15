import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { PiTiktokLogoBold } from "react-icons/pi";
import { BsWhatsapp } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";

function Banner() {
  return (
    <div className="">
      <div className="flex justify-between py-3">
        <div className="flex">
          <div className="flex items-center">
            <div className="bg-red-400 p-1 rounded text-white">
              <BiPhoneCall />
            </div>
            <p>+256789645572446</p>
          </div>
          <div className="flex items-center">
            <div className="bg-red-400 p-1 rounded text-white">
              <HiOutlineMail />
            </div>
            <p>topmoverz@gmail.com</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-red-400 p-1 rounded text-white">
            <PiTiktokLogoBold />
          </div>
          <div className="bg-red-400 p-1 rounded text-white">
            <BsWhatsapp />
          </div>
          <div className="bg-red-400 p-1 rounded text-white">
            <FiFacebook />
          </div>
          <div className="bg-red-400 p-1 rounded text-white">
            <BsInstagram />
          </div>
          <div className="bg-red-400 p-1 rounded text-white">
            <FiTwitter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
