"use client";

import TabData from "@/components/tab/TabData";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { homeData } from "@/utils/servicesData";
import Why from "@/components/why/Why";
import { motion } from "framer-motion";
import Image from "next/image";
import Banner1 from "@/components/banner1/Banner1";

function Page() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // exist={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="bg-[#F5F5F5] py-20">
        <div className="md:px-12 px-2">
          <div>
            <h2 className="text-3xl text-[#096FC2] border-b-2 pb-3 border-[#EA6E71] w-fit uppercase">
              Our Services
            </h2>
            <p className="text-slate-700 max-w-md py-7">
              Contact us today to get started and discover why we are the
              preferred choice for countless individuals and businesses.
            </p>
          </div>
          <div className="mr-3 grid grid-cols-fluid gap-5">
            {homeData.map(({ id, title, description, imageUrl }) => (
              <div key={id} className="border border-[#7d95ae]">
                <div className="">
                  <Image
                    src={imageUrl}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="bg-white ">
                  <h2 className="bg-[#0B1B2B] text-white py-2 text-center">
                    {title}
                  </h2>
                  <p className="text-slate-700 py-2 px-2 leading-loose">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Banner1 />
      <Why />
    </motion.div>
  );
}

export default Page;
