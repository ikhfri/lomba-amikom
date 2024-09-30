import gsap from "gsap"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP);

export default function RunningText() {

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.to(".running", {
            xPercent: -100,
            repeat: -1,
            duration: 15,
            ease: 'none'
        })
    })

    return (
        <div className="relative text-slate-500">
            <div className="flex w-fit flex-auto flex-row text-[6vh] opacity-45">
                <div className="flex items-center flex-shrink-0 px-[4px] py-0 running">Modern Furniture · </div>
                <div className="flex items-center flex-shrink-0 px-[4px] py-0 running">Modern Furniture · </div>
                <div className="flex items-center flex-shrink-0 px-[4px] py-0 running">Modern Furniture · </div>
                <div className="flex items-center flex-shrink-0 px-[4px] py-0 running">Modern Furniture · </div>
                <div className="flex items-center flex-shrink-0 px-[4px] py-0 running">Modern Furniture · </div>
                <div className="flex items-center flex-shrink-0 px-[4px] py-0 running">Modern Furniture · </div>
                <div className="flex items-center flex-shrink-0 px-[4px] py-0 running">Modern Furniture · </div>
            </div>
        </div>
    )
}