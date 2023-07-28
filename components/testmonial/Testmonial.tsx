"use client";

import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [1,2,3];

function Testmonial() {
  return (
    <div className="w-full h-[70vh] bg-[url('https://images.unsplash.com/photo-1600725935160-f67ee4f6084a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG1vdmVyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60')] bg-cover bg-center">
      <div className="px-12 h-full">
        <Slide indicators={true}>
          {slideImages.map((_, index) => (
            <div key={index} className="w-full flex items-center justify-center h-[60vh]">
              <div className="text-center">
                <h2>Geofrey Isiagi</h2>
                <h4>Customer</h4>
                <p className="max-w-[900px]">
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
