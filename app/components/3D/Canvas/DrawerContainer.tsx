"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Suspense } from "react";
import { Loading } from "./CanvasLoader";
import { Drawer } from "../drawer";

// without registering scrolltriiger the model will break
gsap.registerPlugin(ScrollTrigger);

const DrawerContainer = () => {
  return (
    <Canvas
      camera={{
        position: [5.742922067308307, 2.2387122409413784, 1.2218255872664914],
      }}
      shadows
    >
      <OrbitControls enablePan={false} enableRotate={true} enableZoom={false} />
      <Suspense fallback={<Loading />}>
        <Drawer />
      </Suspense>
    </Canvas>
  );
};
export default DrawerContainer;
