"use client";

import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  {
    id: 1,
    name: "Susan",
    content:
      "I couldn't be happier with the service I received from Top Movers Uganda. Moving is always a stressful experience, but their team made it so much easier. From the initial consultation to the final delivery, everything went smoothly. The crew was punctual, professional, and handled my belongings with care. I highly recommend them to anyone in need of a reliable moving company.",
  },
  {
    id: 2,
    name: "Emily",
    content:
      "I've moved several times in the past, but my recent experience with Top Movers Uganda was by far the best. Their team was not only efficient but also friendly and attentive to my needs. They handled my fragile items with utmost care and ensured that I felt comfortable throughout the process. I'm grateful for their exceptional service.",
  },
  {
    id: 3,
    name: "Susan",
    content:
      "I had some unique items that required special handling during my move, and Top Movers Uganda didn't disappoint. They went above and beyond to ensure that everything arrived safely. Their attention to detail and commitment to customer service are commendable. I'll definitely use them for any future moves.",
  },
];

// const slideImages = [1, 2, 3];

function Testmonial() {
  return (
    <div className="w-full h-[85vh] bg-[url('https://images.unsplash.com/photo-1600725935160-f67ee4f6084a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG1vdmVyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60')] bg-cover bg-center">
      <div className="bg-black opacity-90 md:px-12 px-2 h-full">
        <h2 className="text-white  text-2xl text-center pt-[4rem]">
          What Your Clients Say
        </h2>
        <Slide indicators={false}>
          {slideImages.map(({ id, name, content }) => (
            <div
              key={id}
              className="w-full flex flex-col items-center justify-center pt-12"
            >
              <div className="text-center">
                <h2 className="text-3xl text-[#096FC2] pb-3 uppercase text-center">
                  {name}
                </h2>
                <h4 className="text-2xl text-[#EA6E71] py-2">Customer</h4>
                <p className="max-w-[900px] text-white bg-black  border  rounded leading-loose mt-8 p-4">
                  {content}
                </p>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
}

export default Testmonial;
