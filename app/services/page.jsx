"use client";

import TabData from "@/components/tab/TabData";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { homeData } from "@/utils/servicesData";
import Why from "@/components/why/Why";
import Team from "@/components/team/Team";

function Page() {
  const [tab, setTab] = useState("");

  useEffect(() => {
    // Check if there's a hash fragment in the URL
    const hash = window.location.hash.substring(1);
    if (hash) {
      setTab(hash);
      
    } else {
      setTab("movement")
      window.history.pushState({}, "", "#" + "movement");
    }
  }, []);

  const handleClick = (route) => {
    // Update the hash fragment in the URL without triggering a page reload
    window.history.pushState({}, "", "#" + route);
    setTab(route);
  };

  return (
    <div className=" ">
      <div className="bg-gray-100 flex md:px-12 px-2 gap-8 sm:flex-nowrap flex-wrap py-10">
        <div className="bg-white p-5 md:max-w-[30%] w-full h-fit">
          <ul className="leading-loose text-slate-600">
          {homeData.map(({id, title, link}) => (
            <li onClick={() => { handleClick(link)}} key={id} className="cursor-pointer">{title}</li>
          ))}
          </ul>
        </div>
        <div className="md:max-w-[70%] w-full">
          {(() => {
            switch (tab) {
              case "movement":
                return <TabData />;
              case "about":
                return <h1>About</h1>;
              case "services":
                return <h1>Services</h1>;

              default:
                return <h1>Nice Work</h1>;
            }
          })()}
        </div>
      </div>
      <Why />
      <Team />
    </div>
  );
}

export default Page;
