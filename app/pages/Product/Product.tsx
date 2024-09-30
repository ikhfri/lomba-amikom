'use client';

import CardProduct from "@/app/components/Product/CardProduct";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ProductPage() {

    useGSAP(() => {
        const ScrollTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.card-scroll-trigger',
                start: 'top top',
                end: '+=3000',
                scrub: 1,
                pin: true,
                markers: true,
                onUpdate: (self) => {
                    gsap.to(".card-translate", {
                        x: `${-350 * self.progress}vw`,
                        duration: 1,
                        ease: 'power3.out'
                    })
                }
            }
        });

    })


    return (
        <div className="relative bg-white w-screen h-[400vh]" style={{ backgroundImage: "url('/bg-product.jpg')" }}>
            <div className="container mx-auto py-16 card-scroll-trigger">
                <CardProduct/>
            </div>
        </div>
    );
}
