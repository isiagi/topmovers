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
      <div className="flex flex-wrap justify-between md:px-12 px-2 leading-loose py-10">
        <div>
          <Image src={logo} alt="" width={60} height={60} />
          <div>
            <p className="max-w-xs">
              Lorem ipsum dolor sit amet, consect etur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore ali qua.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-white p-1 rounded text-[#0B1B2B]">
              <PiTiktokLogoBold />
            </div>
            <div className="bg-white p-1 rounded text-[#0B1B2B]">
              <BsWhatsapp />
            </div>
            <div className="bg-white p-1 rounded text-[#0B1B2B]">
              <FiFacebook />
            </div>
            <div className="bg-white p-1 rounded text-[#0B1B2B]">
              <BsInstagram />
            </div>
            <div className="bg-white p-1 rounded text-[#0B1B2B]">
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
      <hr />
      <div className="py-4 text-center">
        <p>Top Movez Uganda 2023</p>
      </div>
    </div>
  );
}

export default Footer;
