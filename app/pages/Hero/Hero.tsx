"use client";

import { Playfair_Display } from "next/font/google";
import { CanvasContainer } from "@/app/components/3D/Canvas/CanvasContainer";
import NevtikLogo from "@/app/components/Logo/NevtikLogo";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FurniturePage from "../Furniture/Furniture";
import Buku from "@/app/components/3D/Buku";
import Sofa from "@/app/components/3D/Sofa";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "400", "700"],
});

export default function HeroPage() {

  useGSAP (() => {
    const tl = gsap.timeline();

    tl.from(".hero-header", {opacity: 1})
    .from(".hero-text", {
      scale: 1.3,
      y: 40,
      opacity: 0,
      ease: "back.out(3)",
      stagger: .1,
      duration: .5,
    })
    // tl.from("hero-description", {
    //   scale: 1,
    //   y: 20,
    //   ease: "power1.in",
    //   opacity: 0,
    //   duration: .5,
    // })


    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.5,
        markers: true,
      }
    });

    scrollTl
      .fromTo("body",
      {
        backgroundColor: "#F9EBD7",
      },
      {
        backgroundColor: "#3b82f6",
        overwrite: "auto",
      },
      1,
    )

  })

  return (
    <div className={`flex ${playfair.className} hero`}>
      <div className="h-screen items-center inline-block m-auto relative top-52 w-full justify-center hero-header ">
        <Buku />
        <Sofa />
        <h1 className="text-[12vh] hero-text text-center font-semibold -left-2 ml-10 ">
          Nevtik 
        </h1>
        <h1 className="text-[12vh] hero-text text-center font-semibold -left-2 ml-10 ">
          Furniture
        </h1>
        <p className="w-[50vw] m-auto items-center top-10 relative text-center hero-text">Transform your home into a dream space with our stunning furniture collection. Each piece is crafted with meticulous attention to detail and the highest quality, ensuring not just striking aesthetics but also comfort and functionality.</p>
        <div className="flex justify-center mt-40 ml-10">
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            Shop Now
          </button>
        </div>
      </div>
      {/* <FurniturePage /> */}
    </div>
  );
}
