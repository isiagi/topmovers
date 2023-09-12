"use client";

import { PiTiktokLogoBold } from "react-icons/pi";
// import { BsWhatsapp } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";

function Page() {
  const formRef = useRef<any>();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    // Access form fields using formRef.current
    const formData = {
      name: formRef.current?.elements["name"].value,
      email: formRef.current?.elements["email"].value,
      subject: formRef.current?.elements["subject"].value,
      message: formRef.current?.elements["message"].value,
    };

    try {
      const res = await emailjs.send(
        "service_6q2vjkf",
        "template_feedlb7",
        formData,
        "MXBdQYxQtL9c4snEi"
      );
      formRef.current.reset();
      toast.success("Message successfully sent", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error: any) {
      formRef.current.reset();
      toast.error("Fail sending message", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // exist={{ opacity: 0 }}
      transition={{ duration: 2 }}
      className="text-gray-600 body-font relative py-20"
    >
      <ToastContainer />
      <div className="md:px-12 px-2">
        <h2 className="text-3xl text-[#096FC2] border-b-2 pb-3 border-[#EA6E71] w-fit uppercase">
          Contact Us
        </h2>
        <p className="text-slate-700 max-w-md py-7">
          Contact us today to get started and discover why we are the preferred
          choice for countless individuals and businesses.
        </p>
      </div>
      <div className="container px-5 py-18 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder="0"
            title="map"
            // marginheight="0"
            // marginwidth="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Kampala,%20Uganda&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
            // style="filter: grayscale(1) contrast(1.2) opacity(0.4);"
          ></iframe>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">Gayaza Road, Kampala</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a
                href="mailto:topmoversug@gmail.com"
                className="text-indigo-500 leading-relaxed"
              >
                topmoversug@gmail.com
              </a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <a href="tel:+256742891524">
                <p className="leading-relaxed">
                  +256742891524 /<br /> +256783559665
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Contact Us
          </h2>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="subject"
                className="leading-7 text-sm text-gray-600"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              type="submit"
            >
              Submit
            </button>
          </form>
          <div className="flex items-center gap-3 mt-4">
            <div className=" p-1 rounded text-red-400">
              <PiTiktokLogoBold />
            </div>
            <Link
              href={"https://www.linkedin.com/in/top-movers-uganda-831176290"}
              target="_blank"
            >
              <div className=" p-1 rounded  text-green-500">
                <BiLogoLinkedinSquare />
              </div>
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=100063519168714"
              target="_blank"
            >
              <div className=" p-1 rounded text-blue-600">
                <FiFacebook />
              </div>
            </Link>
            <div className=" p-1 rounded text-red-500">
              <BsInstagram />
            </div>
            <Link href={"https://twitter.com/TopmoversUg?s=09"} target="_blank">
              <div className=" p-1 rounded ">
                <FiTwitter />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Page;
