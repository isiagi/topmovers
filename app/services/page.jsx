"use client";

import TabData from "@/components/tab/TabData";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { homeData } from "@/utils/servicesData";

function Page() {
  const [tab, setTab] = useState("");

  useEffect(() => {
    // Check if there's a hash fragment in the URL
    const hash = window.location.hash.substring(1);
    if (hash) {
      setTab(hash);
    }
  }, []);

  const handleClick = (route) => {
    // Update the hash fragment in the URL without triggering a page reload
    window.history.pushState({}, "", "#" + route);
    setTab(route);
  };

  return (
    <div className="h-screen bg-gray-100">
      <div className="flex md:px-12 px-2 gap-8 sm:flex-nowrap flex-wrap py-10">
        <div className="bg-white p-5 md:max-w-[30%] w-full h-fit">
          <ul>
          {homeData.map(({id, title}) => (
            <li onClick={() => { handleClick(title)}} key={id}>{title}</li>
          ))}
          </ul>
        </div>
        <div className="md:max-w-[70%] w-full">
          {(() => {
            switch (tab) {
              case "home":
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
    </div>
  );
}

export default Page;
