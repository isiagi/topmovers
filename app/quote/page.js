"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Page() {
  const formRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();

    alert("hello");

    // Access form fields using formRef.current
    const formData = {
      firstName: formRef.current?.elements["firstName"].value,
      lastName: formRef.current?.elements["lastName"].value,
      email: formRef.current?.elements["email"].value,
      phoneNumber: formRef.current?.elements["phoneNumber"].value,
      countryName: formRef.current?.elements["countryName"].value,
      districtName: formRef.current?.elements["districtName"].value,
      address: formRef.current?.elements["address"].value,
      requestedMoveDate: formRef.current?.elements["requestedMoveDate"].value,
      fromArea: formRef.current?.elements["fromArea"].value,
      describeFromLocation:
        formRef.current?.elements["describeFromLocation"].value,
      toArea: formRef.current?.elements["toArea"].value,
      describeToLocation: formRef.current?.elements["describeToLocation"].value,
      typeOfMovement: formRef.current?.elements["typeOfMovement"].value,
    };

    // Handle the form data as needed (e.g., send it to a server)
    try {
      const res = await emailjs.send(
        "service_sdk45dx",
        "template_lsx12m2",
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
    } catch (error) {
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
    // Reset the form
    formRef.current?.reset();
  };

  return (
    <div>
      <ToastContainer />
      <div className="md:px-12 px-2 py-20">
        <div>
          <h2 className="text-3xl text-[#096FC2] border-b-2 pb-3 border-[#EA6E71] w-fit uppercase">
            Get A Quote
          </h2>
          <p className="text-slate-700 max-w-md py-7">
            Contact us today to get started and discover why we are the
            preferred choice for countless individuals and businesses.
          </p>
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="flex flex-wrap justify-center gap-9">
            <div>
              <h3 className="text-slate-600 font-medium text-xl">
                Contact Information
              </h3>
              <div>
                <div className="flex flex-wrap gap-3 my-4">
                  <div className="flex-1">
                    <label className="text-slate-600" htmlFor="holder">
                      First Name:
                    </label>
                    <br />
                    <input
                      type="text"
                      name="firstName"
                      required
                      className="border outline-none border-gray-300 py-2 rounded mb-1 w-full"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-slate-600" htmlFor="lastName">
                      Last Name:
                    </label>
                    <br />
                    <input
                      type="text"
                      name="lastName"
                      required
                      className="border outline-none border-gray-300 py-2 rounded mb-1 w-full"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 my-4">
                  <div className="flex-1">
                    <label className="text-slate-600" htmlFor="email">
                      Email:
                    </label>
                    <br />
                    <input
                      type="email"
                      name="email"
                      required
                      className="border outline-none border-gray-300 py-2 rounded mb-1 w-full"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-slate-600" htmlFor="phoneNumber">
                      Phone Number:
                    </label>
                    <br />
                    <input
                      type="text"
                      name="phoneNumber"
                      required
                      className="border outline-none border-gray-300 py-2 rounded mb-1 w-full"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 my-4">
                  <div className="flex-1">
                    <label className="text-slate-600" htmlFor="countryName">
                      Country Name:
                    </label>
                    <br />
                    <input
                      type="text"
                      name="countryName"
                      required
                      className="border outline-none border-gray-300 py-2 rounded mb-1 w-full"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-slate-600" htmlFor="districtName">
                      District Name:
                    </label>
                    <br />
                    <input
                      type="text"
                      name="districtName"
                      required
                      className="border outline-none border-gray-300 py-2 rounded mb-1 w-full"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <label className="text-slate-600" htmlFor="address">
                    Address:
                  </label>
                  <br />
                  <input
                    type="text"
                    name="address"
                    required
                    className="border outline-none border-gray-300 py-2 rounded mb-1 w-full"
                  />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-slate-600 font-medium text-xl">
                Move Details
              </h3>
              <div>
                <div className="flex-1 my-4">
                  <label className="text-slate-600" htmlFor="requestedMoveDate">
                    Requested Move Date
                  </label>
                  <br />
                  <input
                    type="date"
                    name="requestedMoveDate"
                    required
                    className="border outline-none border-gray-300 py-[7px] rounded mb-1 w-full"
                  />
                </div>
                <div className="flex flex-wrap gap-3 my-4">
                  <div className="flex-1">
                    <label className="text-slate-600" htmlFor="fromArea">
                      From Area:
                    </label>
                    <br />
                    <input
                      type="text"
                      name="fromArea"
                      required
                      className="border outline-none border-gray-300 py-2 rounded mb-1 w-full"
                    />
                  </div>
                  <div className="flex-1">
                    <label
                      className="text-slate-600"
                      htmlFor="describeFromLocation"
                    >
                      Describe Location:
                    </label>
                    <br />
                    <input
                      type="text"
                      name="describeFromLocation"
                      required
                      className="border outline-none border-gray-300 py-2 rounded mb-1 w-full"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 my-4">
                  <div className="flex-1">
                    <label className="text-slate-600" htmlFor="toArea">
                      To Area:
                    </label>
                    <br />
                    <input
                      type="text"
                      name="toArea"
                      required
                      className="border outline-none border-gray-300 py-2 rounded mb-1 w-full"
                    />
                  </div>
                  <div className="flex-1">
                    <label
                      className="text-slate-600"
                      htmlFor="describeToLocation"
                    >
                      Describe Location:
                    </label>
                    <br />
                    <input
                      type="text"
                      name="describeToLocation"
                      required
                      className="border outline-none border-gray-300 py-2 rounded mb-1 w-full"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <label className="text-slate-600" htmlFor="typeOfMovement">
                    Type Movement:
                  </label>
                  <br />
                  <select
                    required
                    name="typeOfMovement"
                    className="outline-none rounded mb-1 w-full py-[10px] bg-white border"
                  >
                    <option>Residential moving</option>
                    <option>Commercial moving</option>
                    <option>Local Moving</option>
                    <option>Long Distance Moving</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center my-9">
            <button
              type="submit"
              className="border text-slate-600 py-2 px-2 hover:bg-blue-500 hover:text-white rounded hover:border-none"
            >
              Get A Quote
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page;
