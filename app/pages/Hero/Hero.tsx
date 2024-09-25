'use client';

import { Playfair_Display } from "next/font/google";
import { CanvasContainer } from "@/app/components/3D/Canvas/CanvasContainer";

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: [ '500','600', '400', '700' ]
})

export default function HeroPage() {
  return (
    <div className={`flex ${playfair.className}`}>
      <div className="h-screen items-center text-white w-full flex justify-center flex-col">
        <h1 className="text-[92px] font-semibold absolute left-0 ml-10">Nevtik</h1>
      </div>
      <div className="h-screen w-full left-[80px] relative top-0 z-10 hidden lg:block">
          <CanvasContainer />
      </div>
      <div className="trigger relative top-[200px]"></div>
    </div>
  )
}