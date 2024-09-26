"use client";

import { useState } from "react";
import navbarData from "@/app/data/ListNavbar/DataListNavbar.json";
import Link from "next/link";

export default function Navbar() {
  const navbarItems = navbarData.navbar || [];
  const [hoveredIndex, setHoveredIndex] = useState<number | string | null>(
    null
  );

  console.log(navbarItems);

  return (
    <main className="flex justify-center">
      <nav className="w-[40%] rounded-full mt-5 z-50 h-20 font-semibold opacity-95 bg-opacity-90 shadow-md backdrop-filter-[40px] bg-slate-600 fixed">
        <ul className="flex justify-end mt-7 mr-16 text-center">
          <img src="/nevtik.png" alt="" className="w-[8%] absolute left-0 ml-4 top-0 mt-2" />
          {navbarItems.map((item, index) => (
            <li key={index} className="flex items-center justify-center relative w-28 h-6">
              <Link href={item.link} className="flex items-center">
                <img
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  src={hoveredIndex === index ? item.gif : item.static}
                  className={`z-10 transition-transform duration-200 pl-2 ${
                    hoveredIndex === index
                      ? " h-[33.3px] relative -left-0 "
                      : "h-[25px]"
                  }`}
                  alt={item.label}
                />
                <span className={`px-10 absolute w-1 text-white ${hoveredIndex === index ? "left-10" : ""}`}>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
