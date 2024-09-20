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
      <nav className="w-full h-20 bg-white text-[#969696dd] font-semibold">
        <ul className="flex justify-end mt-7 mr-7 text-center">
          {navbarItems.map((item, index) => (
            <li key={index} className="flex items-center relative w-36 h-10 -top-2 ">
              <Link href={item.link} className="flex items-center">
                <img
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  src={hoveredIndex === index ? item.gif : item.static}
                  className={`z-10 transition-transform duration-200 pl-2 ${
                    hoveredIndex === index
                      ? " h-[33.3px] relative -left-1 "
                      : "h-[25px]"
                  }`}
                  alt={item.label}
                />
                <span className="px-10 absolute">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
