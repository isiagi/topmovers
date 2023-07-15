import Image from "next/image";
import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import logo from "@/public/topmover.png"

function Nav() {
  return (
    <div className="h-[12vh] bg-[#0B1B2B] flex items-center text-white">
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-20 items-center">
          <div className="bg-white w-[80px] h-[80px]">
            <Image src={logo} alt="" />
           
          </div>
          <ul className="flex gap-9">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-red-400 p-1 rounded">
            <HiOutlineMail />
          </div>
          <h2>REQUEST A QUOTE</h2>
        </div>
      </div>
    </div>
  );
}

export default Nav;
