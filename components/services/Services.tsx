"use client";

import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import img1 from "@/public/hero.jpg";

import { homeData } from "@/utils/servicesData";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Services() {
  return (
    <div className="bg-[#F2F2F2]">
      <div className="md:px-12 px-2 py-12">
        <div>
          <h2 className="text-3xl text-[#096FC2] border-b-2 pb-3 border-[#EA6E71] w-fit uppercase">
            Our Services
          </h2>
          <p className="text-slate-700 max-w-md py-6">
            Contact us today to get started and discover why we are the
            preferred choice for countless individuals and businesses.
          </p>
        </div>
        <Carousel responsive={responsive}>
          {homeData.map(({ id, title, description, imageUrl }) => (
            <div key={id} className="mr-3 grid">
              <div className="grid">
                <Image
                  src={imageUrl}
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
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
        </Carousel>
      </div>
    </div>
  );
}

export default Services;
