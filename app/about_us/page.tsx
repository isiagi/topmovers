"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Testmonial from "@/components/testmonial/Testmonial";
import Services from "@/components/services/Services";
import Why from "@/components/why/Why";
import Banner1 from "@/components/banner1/Banner1";
import { AnimatePresence } from "framer-motion";

import img6 from "@/public/9.jpeg";

function page() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // exist={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="container md:px-12 px-2">
        <div className="py-14 flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2">
            {/* <h2 className="text-2xl leading-loose">Who We Are</h2> */}
            <h2 className="text-3xl text-[#026CC0]">
              Welcome Top Movers & Packers
            </h2>
            <div className="leading-loose">
              <p className="text-slate-700 py-2 px-2 leading-loose">
                Welcome to Top Mover Ugnada, your trusted moving partner. With
                years of experience, we specialize in providing reliable and
                efficient moving services for both individuals and businesses.
              </p>
              <p className="text-slate-700 py-2 px-2 leading-loose">
                At Top Mover Uganda, we understand the stress and challenges
                that come with moving. That&apos;s why our dedicated team of
                professionals is committed to making your relocation process as
                smooth and hassle-free as possible.
              </p>
              <p className="text-slate-700 py-2 px-2 leading-loose">
                We offer a wide range of services tailored to your specific
                needs, including local and long-distance moves, residential and
                commercial relocations, packing and unpacking, furniture
                assembly, and secure storage solutions.
              </p>
              <p className="text-slate-700 py-2 px-2 leading-loose">
                Our priority is the safety and security of your belongings. With
                attention to detail and a personalized approach, we handle your
                items with care and ensure their safe arrival at your new
                destination.
              </p>
              <p className="text-slate-700 py-2 px-2 leading-loose">
                We pride ourselves on our exceptional customer service,
                transparent pricing, and commitment to exceeding your
                expectations. Choose Top Mover Uganda for a stress-free and
                reliable moving experience.
              </p>
              <p className="text-[#0770C5] py-2 px-2 leading-loose">
                Contact us today to request a quote or schedule a consultation.
                Let us take the burden off your shoulders and make your move a
                seamless one.
              </p>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full relative  bg-green-300">
            <Image src={img6} alt="" className="h-full object-cover" />
          </div>
        </div>
      </div>
      <Testmonial />
      <div>
        <Services />
        <Why />
        <Banner1 />
      </div>
    </motion.div>
  );
}

export default page;
