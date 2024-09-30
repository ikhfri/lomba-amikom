import Image from "next/image";
import { CanvasContainer } from "./components/3D/Canvas/CanvasContainer";
import HeroPage from "./pages/Hero/Hero";
import FurniturePage from "./pages/Furniture/Furniture";
import ProductPage from "./pages/Product/Product";
import FooterPage from "./pages/Footer/Footer";
export default function Home() {
  return (
    <>
        <FurniturePage />   
        <HeroPage />
        <ProductPage />
        {/* <FooterPage /> */}
    </>
  );
}
