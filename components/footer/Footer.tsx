import Image from "next/image";
import React from "react";
import logo from "@/public/topmover.png";
import { GoLocation } from "react-icons/go";

import { PiTiktokLogoBold } from "react-icons/pi";
import { BiLogoLinkedinSquare } from "react-icons/bi";
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
              Top Mover Uganda - Your premier choice for hassle-free relocation.
              Trust us to move you with care and expertise.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-white p-1 rounded text-[#0B1B2B]">
              <PiTiktokLogoBold />
            </div>
            <Link
              href={"https://www.linkedin.com/in/top-movers-uganda-831176290"}
              target="_blank"
            >
              <div className="bg-white p-1 rounded text-[#0B1B2B]">
                <BiLogoLinkedinSquare />
              </div>
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=100063519168714"
              target="_blank"
            >
              <div className="bg-white p-1 rounded text-[#0B1B2B]">
                <FiFacebook />
              </div>
            </Link>
            <div className="bg-white p-1 rounded text-[#0B1B2B]">
              <BsInstagram />
            </div>
            <Link href={"https://twitter.com/TopmoversUg?s=09"} target="_blank">
              <div className="bg-white p-1 rounded text-[#0B1B2B]">
                <FiTwitter />
              </div>
            </Link>
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
          <a href="mailto:topmoversug@gmail.com">
            <div className="flex items-center gap-2">
              <HiOutlineMail className="text-xl text-[#A73416] font-bold" />

              <p>topmoversug@gmail.com</p>
            </div>
          </a>
          <a href="tel:+256742891524">
            <div className="flex items-center gap-2">
              <BiPhoneCall className="text-xl text-[#A73416] font-bold" />
              <p>+256742891524/+256783559665</p>
            </div>
          </a>
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
          designed and developed with <span className="text-[#A73416]">❤</span>{" "}
          by{" "}
          <span className="hover:underline">
            <Link
              href="https://portfolio-website-isiagi.vercel.app/"
              target="_blank"
            >
              Geofrey Isiagi
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
