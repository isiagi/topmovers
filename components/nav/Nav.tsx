"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import logo from "@/public/topmover.png";
import Link from "next/link";
import { ImCancelCircle } from "react-icons/im";
import { CgDetailsMore } from "react-icons/cg";

function Nav() {
  const [open, setOpen] = useState(false);
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.scrollY)
    }
  
  }, [])
  

  return (
    <div className={`${offset > 30 ? "fixed" : "relative"} z-10 w-full transition ease-in-out ${offset > 30 ? "top-0" : ""}  h-[12vh] bg-[#0B1B2B] flex items-center text-white`}>
      <div className="flex justify-between items-center w-full md:px-12 px-2">
        <div className="flex gap-20 items-center md:w-auto w-full">
          <div className="flex justify-between items-center md:w-auto w-full">
            <div className="bg-white w-[80px] h-[80px]">
              <Image src={logo} alt="" />
            </div>
            <div className="md:hidden">
              {open ? (
                <div onClick={() => setOpen(!open)}>
                  <ImCancelCircle className="text-3xl text-slate-700" />
                </div>
              ) : (
                <div onClick={() => setOpen(!open)}>
                  <CgDetailsMore className="text-3xl text-slate-700" />
                </div>
              )}
            </div>
          </div>
          <ul className="md:flex hidden gap-9">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/about_us">
              <li>About Us</li>
            </Link>
            <Link href="/services">
              <li>Services</li>
            </Link>
            <Link href={"/contact"}>
              <li>Contact</li>
            </Link>
          </ul>
          {/* mobile nav */}
          <ul
            className={`
        md:hidden bg-[#0B1B2B] opacity-80 z-10 flex flex-col gap-5 absolute w-full top-[80px] overflow-y-auto py-12 font-medium pl-4
        duration-500 text-white ${open ? "left-0" : "left-[-100%]"}
        `}
          >
            <Link href="/" onClick={() => setOpen(false)}>
              <li>Home</li>
            </Link>
            <Link href="/about_us" onClick={() => setOpen(false)}>
              <li>About Us</li>
            </Link>
            <Link href="/services" onClick={() => setOpen(false)}>
              <li>Services</li>
            </Link>
            <Link href={"/contact"} onClick={() => setOpen(false)}>
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        <div className="md:flex hidden items-center gap-3">
          <div className="bg-red-400 p-1 rounded">
            <HiOutlineMail />
          </div>
          <Link href="/quote"><h2>REQUEST A QUOTE</h2></Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
