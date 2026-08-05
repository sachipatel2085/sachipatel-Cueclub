import { Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export default function Particles() {
  const ref = useRef();

  const particles = useMemo(() => {
    const positions = [];

    for (let i = 0; i < 1000; i++) {
      positions.push(
        THREE.MathUtils.randFloatSpread(26), // X: -13 to 13
        THREE.MathUtils.randFloatSpread(14), // Y: -7 to 7
        THREE.MathUtils.randFloatSpread(18), // Z: -9 to 9
      );
    }

    return new Float32Array(positions);
  }, []);

  useFrame((state) => {
    if (!ref.current) return;

    ref.current.rotation.y += 0.0005;

    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.1;
  });

  return (
    <Points ref={ref} positions={particles} stride={3} position={[0, 0, 0]}>
      <PointMaterial
        transparent
        color="#FFF7D6"
        size={0.07}
        sizeAttenuation
        depthWrite={false}
        opacity={0.55}
      />
    </Points>
  );
}
