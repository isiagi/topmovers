import Image from "next/image";
import React from "react";
import image1 from "@/public/hero.jpg";
import Testmonial from "@/components/testmonial/Testmonial";
import Services from "@/components/services/Services";

function page() {
  return (
    <div>
      <div className="container md:px-12 px-2">
        <div className="flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2">
            <h3>Who We Are</h3>
            <h2>Welcome To Movers & Packers</h2>
            <div className="leading-loose">
              <p>
                Welcome to [Company Name], your trusted moving partner. With
                years of experience, we specialize in providing reliable and
                efficient moving services for both individuals and businesses.
              </p>
              <p>
                At [Company Name], we understand the stress and challenges that
                come with moving. That&apos;s why our dedicated team of
                professionals is committed to making your relocation process as
                smooth and hassle-free as possible.
              </p>
              <p>
                We offer a wide range of services tailored to your specific
                needs, including local and long-distance moves, residential and
                commercial relocations, packing and unpacking, furniture
                assembly, and secure storage solutions.
              </p>
              <p>
                Our priority is the safety and security of your belongings. With
                attention to detail and a personalized approach, we handle your
                items with care and ensure their safe arrival at your new
                destination.
              </p>
              <p>
                We pride ourselves on our exceptional customer service,
                transparent pricing, and commitment to exceeding your
                expectations. Choose [Company Name] for a stress-free and
                reliable moving experience.
              </p>
              <p>
                Contact us today to request a quote or schedule a consultation.
                Let us take the burden off your shoulders and make your move a
                seamless one.
              </p>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full relative h-[450px] bg-green-300">
            <Image src={image1} alt="" className="h-full" objectFit="contain" />
          </div>
        </div>
      </div>
      <div>
        <Services />
      </div>
      <Testmonial />
      
    </div>
  );
}

export default page;