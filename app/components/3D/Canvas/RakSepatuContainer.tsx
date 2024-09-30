'use client';

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Suspense } from "react";
import { Loading } from './CanvasLoader';
import { RakSepatu } from "../Rak-sepatu";

// without registering scrolltriiger the model will break
gsap.registerPlugin(ScrollTrigger);

export const RakContainer = () => {
  return (
    <Canvas
      camera={{
        position: [5.742922067308307, 2.2387122409413784, 1.2218255872664914],
      }}
      shadows
    >
      <OrbitControls
        enablePan={false}
        enableRotate={true}
        enableZoom={false}
      />
      <Suspense fallback={<Loading />}>
          <RakSepatu />
      </Suspense>
    </Canvas>
  );
};
