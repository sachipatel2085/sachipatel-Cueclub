import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function CueBall() {
  const group = useRef();

  const { scene } = useGLTF("/models/cue_ball.glb");

  useFrame((state) => {
    if (!group.current) return;

    group.current.rotation.y += 0.003;

    group.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.08;
  });

  return (
    <primitive
      ref={group}
      object={scene}
      scale={0.6}
      position={[1.35, -0.15, -0.25]}
    />
  );
}

useGLTF.preload("/models/cue-ball.glb");
