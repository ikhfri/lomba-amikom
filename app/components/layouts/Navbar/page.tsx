'use client'

import { useState } from "react";
import navbarData from "@/app/data/ListNavbar/DataListNavbar.json";
import Link from "next/link";

export default function Navbar() {
  const navbarItems = navbarData.navbar || [];
  const [hoveredIndex, setHoveredIndex] = useState<number | string | null>(null)
  
  console.log(navbarItems)

  return (
    <main className="flex justify-center">
      <nav className="w-full h-20 bg-white text-[#969696dd] font-semibold">
        <ul className="flex justify-end mt-7 mr-7 text-center">
            {navbarItems.map((item, index) => (
               <li
               key={index}
               className="flex items-center"
               
             >
               <Link href={item.link} className="flex items-center">
                 <img
                  onMouseEnter={() => setHoveredIndex(item.static)}
                  onMouseLeave={() => setHoveredIndex(null)}
                   src={hoveredIndex === item.static ? item.gif : item.static}
                   className={`h-5 z-10 ${hoveredIndex ? 'h-12' : ''}`}
                   alt={item.label}
                 />
                 <span className="px-2">{item.label}</span>
               </Link>
             </li>
            ))}
        </ul>
      </nav>
    </main>
  );
}
