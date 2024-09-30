"use client";

import { Playfair_Display } from "next/font/google";
import { CanvasContainer } from "@/app/components/3D/Canvas/CanvasContainer";
import NevtikLogo from "@/app/components/Logo/NevtikLogo";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RunningText from "@/app/components/layouts/RunningText/page";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "400", "700"],
});

export default function HeroPage() {
  
  const imageRef2 = useRef<HTMLImageElement | null>(null);

  useGSAP(() => {
  
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.image-trigger',
        start: 'top top',
        end: '+=600 center',
        scrub: 8,
      }
    });

    scrollTl.to(imageRef2.current, {
      y: "-40%",
      duration: 1,
      ease: 'power1.inOut'
    })


  })


  return (
    <div className={` ${playfair.className} h-screen w-screen bg-white`}>
      <div className="bg-white">
        <div className="flex flex-col image-trigger justify-center items-center relative top-20 text-[#beb8b2]">
          <h1 className="items-center text-[2vh]">Furniture Solutions</h1>
          <h1 className="text-[5vh] w-[50%] tracking-widest text-center font-normal">WHERE EXPERIENCE MEETS PERSONALIZATION</h1>
          <Image ref={imageRef2} src="/pxfuel.jpg" alt="kantor" width={1000} height={1000} priority className="w-[40%] z-10 rounded-lg top-28 relative"/>
          <p className="relative top-12 w-[50vw] text-[2vh] text-center">We at Nevtik Furniture have been providing high quality commercial furniture and helping customers in planning their work space. Whether you're looking for a quality desk at an affordable price or want to overhaul your entire office space, our team of experts is ready to help you every step of the way, from selecting furniture to planning the layout.</p>
        </div>
      </div>
      <div className="relative top-[-20%] opacity-35">
        <RunningText />
      </div>
    </div>
  );
}
