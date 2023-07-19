import Image from "next/image";
import React from "react";
import logo from "@/public/topmover.png";
import { GoLocation } from "react-icons/go";

import { PiTiktokLogoBold } from "react-icons/pi";
import { BsWhatsapp } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";

function Footer() {
  return (
    <div className="bg-[#0B1B2B] text-white">
      <div className="flex flex-wrap justify-between md:px-12 px-2">
        <div>
          <Image src={logo} alt="" width={60} height={60} />
          <div>
            <p className="max-w-xs">
              Lorem ipsum dolor sit amet, consect etur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore ali qua.
            </p>
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
        <div>
          <h3 className="mb-4">Site Map</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4">Services</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4">GET IN TOUCH</h3>
          <div className="flex items-center">
            <GoLocation />
            <p>reetyeuiiokkncdsawoiuytoiuytui</p>
          </div>
          <div className="flex items-center">
            <GoLocation />
            <p>reetyeuiiokkncdsawoiuytoiuytui</p>
          </div>
          <div className="flex items-center">
            <GoLocation />
            <p>reetyeuiiokkncdsawoiuytoiuytui</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
