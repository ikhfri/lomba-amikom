'use client';

import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import { Playfair_Display } from 'next/font/google';

gsap.registerPlugin(useGSAP)

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["500", "600", "400", "700"],
  });

export default function FurniturePage() {
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const overlayRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useGSAP(() => {
    const tl = gsap.timeline({
        onComplete: () => setLoading(false)
    });
    tl.to(imageRef.current, {
      scale: 1.05,
      duration: 2,
      ease: "power2.out"
    });

    tl.fromTo(".page-container", 
        {
            clipPath: "circle(120% at 70% 50%)",
            backgroundColor: "#000",
            zIndex: 20,
        },
        {
            clipPath: "circle(65% at 70% 50%)", duration: 2, ease: "power2.inOut", backgroundColor: "#000", zIndex: 50
        }
    )


    // Fade in the content
    tl.to(contentRef.current, {
      opacity: 1,
      duration: 1,
      ease: "power2.out"
    }, "-=1");

    tl.to(overlayRef.current, {
        opacity: 0.65,   // Opacity overlay hitam
        duration: 1,
        ease: "power2.out"
      }, "-=2");

  }, []);

  return (
    <div>
      <div
        className={`page-container bg-black md:block hidden ${
          playfair.className
        } ${loading ? "" : ""}`}
      >
        <div className="relative w-screen h-screen overflow-hidden">
          <div ref={imageRef} className="absolute inset-0">
            <Image
              src="/fadlan.jpg"
              alt="Office Interior"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <div
            ref={overlayRef}
            className="absolute inset-0 bg-[#2b2a2a] opacity-0 pointer-events-none"
          ></div>
          <div ref={contentRef} className="relative h-full opacity-0">
            <div className="container mx-auto px-64 h-full">
              <main className="flex items-center w-screen h-full">
                <div className="w-1/2">
                  <h1 className="text-[12vh] m-auto text-[#d3d3d3] hero-text text-center font-semibold -left-2 ml-10 ">
                    Nevtik
                  </h1>
                  <h1 className="text-[12vh] text-[#d3d3d3] hero-text text-center font-semibold -left-2 ml-10 ">
                    Furniture
                  </h1>
                  <p className="w-[50vw] font-semibold text-[#fff3f3] text-lg m-auto items-center px-12 top-10 relative text-center hero-text-desc">
                    Transform your home into a dream space with our stunning
                    furniture collection. Each piece is crafted with meticulous
                    attention to detail and the highest quality, ensuring not
                    just striking aesthetics but also comfort and functionality.
                  </p>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mb-72 h-auto my-[20rem] block md:hidden bg-white ">
        <h1
          className={`${playfair.className} absolute z-20 inset-0 text-center top-28 text-4xl text-white font-semibold `}
        >
          Nevtik Furniture
        </h1>
        <p
          className={`${playfair.className} absolute z-20 inset-0 text-center top-40 text-[0.6rem] mx-2 text-white font-semibold `}
        >
          Transform your home into a dream space with our stunning furniture
          collection. Each piece is crafted with meticulous attention to detail
          and the highest quality, ensuring not just striking aesthetics but
          also comfort and functionality.
        </p>
        <div ref={imageRef} className="absolute inset-0 h-[20rem] opacity-40">
          <Image src="/mobile.jpg" alt="Office Interior" layout="fill" />
        </div>
      </div>
    </div>
  );
}
