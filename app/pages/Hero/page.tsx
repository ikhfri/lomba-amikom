'use client'

import { Roboto_Slab } from "next/font/google"
import { useRef } from "react";

const robotoSlab = Roboto_Slab({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700"]
})

export default function HeroPage() {
    const videoRef = useRef(null);

    return (
        <div className={` w-full relative`}>
            <video autoPlay loop muted className="h-fit opacity-[0.5]" ><source src="/flower.mp4" type="video/mp4" /></video>
            <h1 className={`${robotoSlab.className} shadow-[0px_20px_20px_10px_#00000024] left-[36%] top-[40%] absolute text-[8vh]`}>TechnoTani</h1>
            {/* <div className="flex items-center justify-center absolute bottom-5 left-1/2 translate-x-[-50%] w-16 h-16 bg-[rgba(255, 255, 255, 0.8)] rounded-[50%]"></div> */}
            <video  ref={videoRef}
            className="w-[5%] h-auto"
            loop
            muted
            onMouseEnter={() => videoRef.current.play()}
            onMouseLeave={() => {
                videoRef.current.pause();
                videoRef.current.currentTime = 0; // Reset ke awal
            }}><source src="/shopping-cart.mp4" type="video/mp4" /></video>
        </div>
    )
}