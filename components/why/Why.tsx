import React from "react";
import { GiSkills } from "react-icons/gi";
import { TbPackages } from "react-icons/tb";
import { MdOutlineGppGood } from "react-icons/md";
import { IoMdPricetags } from "react-icons/io";
import { GiCoffeeCup } from "react-icons/gi";
import { SiAlwaysdata } from "react-icons/si";
import { BsGearWideConnected } from "react-icons/bs";

const whyData = [
  {
    title: "Experience and Expertise",
    para: "With experience in the industry, we have honed our skills and perfected our moving processes. Our team of professionals is highly trained and knowledgeable in handling all aspects of a move, ensuring efficiency and quality service.",
    icon: <BsGearWideConnected />,
  },
  {
    title: "Reliability and Trustworthiness",
    para: "We understand the importance of trust when it comes to entrusting your belongings to a moving company. At [Company Name], we take pride in our reputation for reliability and trustworthiness. We treat your possessions as if they were our own, ensuring their safe and secure transport.",
    icon: <SiAlwaysdata />,
  },
  {
    title: "Comprehensive Services",
    para: "We offer a wide range of services to cater to your specific needs. From packing and loading to transportation and unloading, we have you covered. Our goal is to provide a comprehensive solution to make your move as seamless as possible.",
    icon: <TbPackages />,
  },
  {
    title: "Excellent Customer Service",
    para: "We are committed to providing exceptional customer service from start to finish. Our friendly and knowledgeable staff is available to answer your questions, address any concerns, and provide support throughout the entire moving journey. We strive to make your experience with us as pleasant and stress-free as possible.",
    icon: <MdOutlineGppGood />,
  },
  {
    title: "Transparent Pricing",
    para: "We believe in transparency when it comes to pricing. We provide accurate and competitive quotes, clearly outlining the costs involved. You can trust that there will be no hidden fees or surprises along the way. Our goal is to provide value for your investment and deliver a high-quality moving experience.",
    icon: <IoMdPricetags />,
  },
  {
    title: "Stress-Free Moving Experience",
    para: "Moving can be a stressful and overwhelming experience. By choosing [Company Name], you can enjoy a stress-free move. We take care of the logistics, allowing you to focus on other aspects of your transition. Sit back, relax, and let us handle the heavy lifting.",
    icon: <GiCoffeeCup />,
  },
];

function Why() {
  return (
    <div>
      <div className="py-10 md:px-12 px-2">
        <div>
          <h2 className="text-3xl text-[#096FC2] border-b-2 pb-3 border-[#EA6E71] w-fit uppercase">
            Why Choose US
          </h2>

          <p className="text-slate-600 max-w-md py-6 mb-3">
            Choose Top movers as your trusted moving company, and experience the
            difference we can make in your relocation journey.
          </p>
        </div>
        <div className="grid grid-cols-fluid gap-5">
          {whyData.map(({ title, para, icon }, i) => (
            <div
              key={i}
              className="bg-[#F5F5F5] relative p-3 flex items-center"
            >
              <div className="absolute text-xl bg-[#EA6E71] top-[-10px] left-[-10px] w-[40px] h-[40px] flex items-center justify-center rounded-full text-white border-dashed border-2 border-slate-800">
                {icon}
              </div>
              <div className="mt-4">
                <h3 className="text-xl text-[#1E2638] uppercase py-4">
                  {title}
                </h3>
                <p className="text-slate-700 leading-loose">{para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Why;
