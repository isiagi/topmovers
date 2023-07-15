"use client";

import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import img1 from "@/public/hero.jpg";

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
      <div className="px-12">
        <div>
          <h2>Our Services</h2>
          <p>
            Contact us today to get started and discover why we are the
            preferred choice for countless individuals and businesses.
          </p>
        </div>
        <Carousel responsive={responsive}>
          {[1, 2, 3, 4, 5, 6, 7].map((_, i) => (
            <div key={i} className="mr-3">
              <Image src={img1} alt="" />
              <div className="bg-white">
                <h2>Local or long-distance moving</h2>
                <p>
                  Moving companies can help you move locally within a city or
                  region, as well as facilitate long-distance moves across
                  different cities, states, or even countries.
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
