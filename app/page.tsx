
import HeroPage from "./pages/Hero/Hero";
import FurniturePage from "./pages/Furniture/Furniture";
import ProductPage from "./pages/Product/Product";
import React from "react";
import TestimonialPage from "./pages/Testimonial/Testimonial";

export default function Home() {
  return (
    <>
        <FurniturePage />   
        <HeroPage />
        <ProductPage />
        <TestimonialPage />
    </>
  );
}
