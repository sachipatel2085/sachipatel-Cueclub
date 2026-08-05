import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

import CueBall from "./CueBall";
import CueStick from "./CueStick";

export default function SceneComposition() {
  const sceneGroup = useRef();

  useFrame((state) => {
    if (!sceneGroup.current) return;

    const t = state.clock.elapsedTime;

    // Floating animation
    sceneGroup.current.position.y = -0.2 + Math.sin(t * 0.5) * 0.08;

    // Very subtle rotation
    sceneGroup.current.rotation.y = -0.25 + Math.sin(t * 0.25) * 0.03;
  });

  return (
    <group
      ref={sceneGroup}
      position={[4.2, -5.2, 0.5]}
      rotation={[0, -0.25, 0]}
    >
      <CueStick />
      <CueBall />
    </group>
  );
}
