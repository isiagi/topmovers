import Image from "next/image";
import React from "react";
import logo from "@/public/topmover.png";
import { GoLocation } from "react-icons/go";

import { PiTiktokLogoBold } from "react-icons/pi";
import { BsWhatsapp } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";

import { BiPhoneCall } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";

import { homeData } from "@/utils/servicesData";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-[#0B1B2B] text-white">
      <div className="flex flex-wrap justify-between md:px-12 px-2 leading-loose py-12">
        <div>
          <div className="bg-white w-[80px] h-[80px]">
            <Image src={logo} alt="" />
          </div>
          <div className="my-2">
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
          <h3 className="mb-4 font-medium uppercase">Site Map</h3>
          <ul>
            <Link href="/">
              <li className="hover:text-[#A73416]">Home</li>
            </Link>
            <Link href="/about_us">
              <li className="hover:text-[#A73416]">About Us</li>
            </Link>
            <Link href="/services">
              <li className="hover:text-[#A73416]">Services</li>
            </Link>
            <Link href="/contact">
              <li className="hover:text-[#A73416]">Contact</li>
            </Link>
            <Link href="/quote">
              <li className="hover:text-[#A73416]">Get a Quote</li>
            </Link>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-medium uppercase">Services</h3>
          <ul>
            {homeData.map(({ id, title }) => (
              <Link href="/services" key={id}>
                <li className="hover:text-[#A73416]">{title}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-medium">GET IN TOUCH</h3>
          <div className="flex items-center gap-2">
            <HiOutlineMail className="text-xl text-[#A73416] font-bold" />
            <p>topmovezuganda@gmail.com</p>
          </div>
          <div className="flex items-center gap-2">
            <BiPhoneCall className="text-xl text-[#A73416] font-bold" />
            <p>+256786998578/+25690234543</p>
          </div>
          <div className="flex items-center gap-2">
            <GoLocation className="text-xl text-[#A73416] font-bold" />
            <p>Kampala, Uganda</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="py-6 text-center">
        <p>Top Movez Uganda 2023</p>
        <p>
          designed and developed with{" "}
          <span className="text-[#A73416]">Love</span> by{" "}
          <span>
            <Link href="https://portfolio-website-isiagi.vercel.app/">Geofrey Isiagi</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
