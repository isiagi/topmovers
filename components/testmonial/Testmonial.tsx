"use client";

import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";



const slideImages = [
  {
    url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "Slide 1",
  },
  {
    url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    caption: "Slide 2",
  },
  {
    url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "Slide 3",
  },
];

function Testmonial() {
  return (
    <div className="w-full h-screen bg-[url('https://images.unsplash.com/photo-1600725935160-f67ee4f6084a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG1vdmVyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60')] bg-cover bg-center">
      <div>
        <Slide indicators={true}>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div
                
              >
                <h2>Geofrey Isiagi</h2>
                <h4>Customer</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate expedita doloribus a praesentium ratione! Explicabo
                  autem optio laborum officia! Placeat adipisci facere deleniti,
                  commodi illo inventore? Voluptatem quo natus delectus! Esse
                  eos ut est nam, corporis repellendus maxime fuga adipisci ea,
                  asperiores veniam doloribus earum recusandae minima quo!
                  Repellat totam reiciendis reprehenderit magnam architecto,
                  voluptatibus saepe maiores repellendus beatae fuga?
                </p>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
}

export default Testmonial;
