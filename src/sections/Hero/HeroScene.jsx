import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Experience from "../../three/Experience";

export default function HeroScene() {
  return (
    <div className="hero-scene absolute inset-0 z-10">
      <Canvas
        shadows
        className="!w-full !h-full"
        dpr={[1, 2]}
        camera={{
          position: [0, 1.2, 8],
          fov: 32,
        }}
      >
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
      </Canvas>
    </div>
  );
}
