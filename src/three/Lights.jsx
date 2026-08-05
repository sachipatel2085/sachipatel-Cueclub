import { SpotLight } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function SceneLights() {
  const spotlight = useRef();

  useFrame((state) => {
    if (!spotlight.current) return;

    const t = state.clock.elapsedTime;

    spotlight.current.position.x = Math.sin(t * 0.25) * 1.5;
    spotlight.current.position.z = 5 + Math.cos(t * 0.25) * 0.5;
  });

  return (
    <>
      <ambientLight intensity={0.12} />

      <SpotLight
        ref={spotlight}
        position={[4, 6, 5]}
        angle={0.35}
        penumbra={1}
        intensity={35}
        castShadow
        color="#ffffff"
      />

      <pointLight position={[-4, 2, 3]} color="#0D7C3E" intensity={4} />

      <pointLight position={[4, -1, 2]} color="#D4AF37" intensity={2.5} />
    </>
  );
}
