/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import navbarData from "@/app/data/ListNavbar/DataListNavbar.json";
import Link from "next/link";

export default function Navbar() {
  const navbarItems = navbarData.navbar || [];
  const [hoveredIndex, setHoveredIndex] = useState<number | string | null>(
    null
  );


  return (
    <main className="flex justify-center">
      <nav className="md:w-[40vw] mt-7 w-[90vw]   rounded-full md:mt-5 z-50 md:h-20 font-semibold opacity-95 bg-opacity-90 shadow-md backdrop-filter-[40px] bg-slate-600 fixed">
        <ul className="flex justify-end md:mt-7 mr-16 text-center my-3 ">
          <img src="/nevtik.png" alt="" className="md:h-[62px] md:w-16 w-8 absolute left-0 ml-4 top-0 mt-2 md:mt-[0.7rem]"  />
          {navbarItems.map((item, index) => (
            <li key={index} className="flex items-center justify-center relative w-28  h-6">
              <Link href={item.link} className="flex items-center ">
                <img
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  src={hoveredIndex === index ? item.gif : item.static}
                  className={`z-10 hidden md:block  md:ml-0 transition-transform duration-200 pl-2 ${
                    hoveredIndex === index
                      ? " h-[33.3px] relative -left-0 "
                      : "h-[25px]"
                  }`}
                  alt={item.label}
                />
                <span className={`px-4 md:px-[2rem] absolute w-1 text-white ${hoveredIndex === index ? "md:left-10" : ""}`}>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
