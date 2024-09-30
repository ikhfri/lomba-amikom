import { RakContainer } from "@/app/components/3D/Canvas/RakSepatuContainer";
import { getData } from "@/app/lib/services/product";
import Image from "next/image";
import React from "react";


export default async function DetailProductPage(props: any) {
    const { params } = props;
    const product = await getData('http://localhost:3000/api/product/?id=' + params.id)
    return (
        <section className="text-gray-700 body-font overflow-hidden bg-white h-screen">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          {/* <Image
            alt="ecommerce"
            width={1000}
            height={1000}
            className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            src={product.data.image}
          /> */}
          <div className="">
            <RakContainer />
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.data.label}</h1>
            {/* Rating and Reviews */}
            <div className="flex mb-4">
              <span className="flex items-center">
                {/* Star Icons */}
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </span>
            </div>
            <p className="leading-relaxed">{product.data.description}</p>
            {/* Color and Size Options */}
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">${product.data.price}</span>
              <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Button</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}