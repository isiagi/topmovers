"use client";

import TabData from "@/components/tab/TabData";
import React, { useState } from "react";

function Page() {
  const [tab, setTab] = useState<string>("");
  return (
    <div className="h-screen bg-gray-100">
      <div className="flex md:px-12 px-2 gap-8 sm:flex-nowrap flex-wrap py-10">
        <div className="bg-white p-5 md:max-w-[30%] w-full h-fit">
          <ul>
            <li onClick={() => setTab("home")}>Home</li>
            <li onClick={() => setTab("about")}>About</li>
            <li onClick={() => setTab("services")}>Services</li>
          </ul>
        </div>
        <div className="md:max-w-[70%] w-full">
          {((): any => {
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
