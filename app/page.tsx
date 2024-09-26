import Image from "next/image";
import { CanvasContainer } from "./components/3D/Canvas/CanvasContainer";
import HeroPage from "./pages/Hero/Hero";
import FurniturePage from "./pages/Furniture/Furniture";
export default function Home() {
  return (
    <>
      <main className="overflow-hidden">
        <HeroPage />
      </main>
        <FurniturePage />
    </>
  );
}
