import React from "react";
import { GiSkills } from "react-icons/gi";

const whyData = [
  {
    title: "Reliability and Trustworthiness",
    para: "With years of experience in the industry, we have honed our skills and perfected our moving processes. Our team of professionals is highly trained and knowledgeable in handling all aspects of a move, ensuring efficiency and quality service.",
  },
  {
    title: "Reliability and Trustworthiness",
    para: "We understand the importance of trust when it comes to entrusting your belongings to a moving company. At [Company Name], we take pride in our reputation for reliability and trustworthiness. We treat your possessions as if they were our own, ensuring their safe and secure transport.",
  },
  {
    title: "Comprehensive Services",
    para: "We offer a wide range of services to cater to your specific needs. From packing and loading to transportation and unloading, we have you covered. Our goal is to provide a comprehensive solution to make your move as seamless as possible.",
  },
  {
    title: "Excellent Customer Service",
    para: "We are committed to providing exceptional customer service from start to finish. Our friendly and knowledgeable staff is available to answer your questions, address any concerns, and provide support throughout the entire moving journey. We strive to make your experience with us as pleasant and stress-free as possible.",
  },
  {
    title: "Transparent Pricing",
    para: "We believe in transparency when it comes to pricing. We provide accurate and competitive quotes, clearly outlining the costs involved. You can trust that there will be no hidden fees or surprises along the way. Our goal is to provide value for your investment and deliver a high-quality moving experience.",
  },
  {
    title: "Stress-Free Moving Experience",
    para: "Moving can be a stressful and overwhelming experience. By choosing [Company Name], you can enjoy a stress-free move. We take care of the logistics, allowing you to focus on other aspects of your transition. Sit back, relax, and let us handle the heavy lifting.",
  },
];

function Why() {
  return (
    <div>
      <div className="py-6 px-12">
        <div>
          <h2>Why Choose US</h2>
          <p>
            Choose Top movers as your trusted moving company, and experience the
            difference we can make in your relocation journey.
          </p>
        </div>
        <div className="grid grid-cols-fluid gap-5">
          {whyData.map(({ title, para }, i) => (
            <div
              key={i}
              className="bg-[#F5F5F5] relative p-3 flex items-center"
            >
              <div className="absolute bg-red-600 top-[-10px] left-[-10px] w-[40px] h-[40px] flex items-center justify-center rounded-full">
                <GiSkills />
              </div>
              <div className="mt-4">
                <h3>{title}</h3>
                <p>{para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Why;
