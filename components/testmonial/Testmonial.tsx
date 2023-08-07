"use client";

import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [1,2,3];

function Testmonial() {
  return (
    <div className="w-full h-[80vh] bg-[url('https://images.unsplash.com/photo-1600725935160-f67ee4f6084a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG1vdmVyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60')] bg-cover bg-center">
      <div className="bg-black opacity-90 px-12 h-full">
          <h2 className="text-white  text-2xl text-center pt-12">What Your Clients Say</h2>
        <Slide indicators={false}>
          {slideImages.map((_, index) => (
            <div key={index} className="w-full flex flex-col items-center justify-center h-[70vh]">
              <div className="text-center">
                <h2 className="text-3xl text-[#096FC2] pb-3 uppercase text-center">Geofrey Isiagi</h2>
                <h4 className="text-2xl text-[#EA6E71] py-2">Customer</h4>
                <p className="max-w-[900px] text-white bg-black  border p-2 rounded leading-loose">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate expedita doloribus a praesentium ratione! Explicabo
                  autem optio laborum officia! Placeat adipisci facere deleniti,
                  commodi illo inventore? Voluptatem quo natus delectus! Esse
                  eos ut est nam, corporis repellendus maxime fuga adipisci ea,
                  asperiores veniam doloribus earum recusandae minima quo!
                  Repellat totam reiciendis reprehenderit magnam architecto,
                  voluptatibus saepe maiores repellendus beatae fuga?
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
