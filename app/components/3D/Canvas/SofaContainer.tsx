'use client';

import { Canvas } from "@react-three/fiber";
import { Sofa } from '../Scene';
import { Environment, Float, OrbitControls } from "@react-three/drei";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Suspense } from "react";
import { Loading } from './CanvasLoader';
import { Buku } from "../Base";
// without registering scrolltriiger the model will break
gsap.registerPlugin(ScrollTrigger);

export const SofaContainer = () => {
  return (
    <Canvas
      camera={{
        position: [5.742922067308307, 2.2387122409413784, 1.2218255872664914],
      }}
      shadows
    >
      <OrbitControls
        enablePan={false}
        enableRotate={false}
        enableZoom={false}
      />
      <Suspense fallback={<Loading />}>
        <Float
        speed={1.5}
        rotationIntensity={2}
        floatIntensity={1}
        floatingRange={[-0.1, 0.1]}
        >
          <Sofa/>
        </Float>
      </Suspense>
    </Canvas>
  );
};
