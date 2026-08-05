import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function CueStick() {
  const { scene } = useGLTF("/models/cue_stick.glb");
  const stickRef = useRef();

  useFrame((state) => {
    if (!stickRef.current) return;

    const t = state.clock.elapsedTime;

    stickRef.current.rotation.z = -0.18 + Math.sin(t * 0.6) * 0.015;

    stickRef.current.position.y = 0.15 + Math.sin(t * 0.5) * 0.03;
  });

  return (
    <primitive
      ref={stickRef}
      object={scene}
      scale={2.35}
      position={[0.2, -0.75, 1.35]}
      rotation={[-5.15, -1.05, -0.18]}
    />
  );
}

useGLTF.preload("/models/cue-stick.glb");
