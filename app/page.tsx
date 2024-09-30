import Image from "next/image";
import { CanvasContainer } from "./components/3D/Canvas/CanvasContainer";
import HeroPage from "./pages/Hero/Hero";
import FurniturePage from "./pages/Furniture/Furniture";
import ProductPage from "./pages/Product/Product";
export default function Home() {
  return (
    <>
        <FurniturePage />   
        <HeroPage />
        <ProductPage />
    </>
  );
}
