export default function Floor() {
  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[4.55, -0.55, 0]}
      receiveShadow
    >
      <planeGeometry args={[3, 3]} />
      <meshPhysicalMaterial
        color="#0A3B1C"
        roughness={0.98}
        clearcoat={0}
        metalness={0}
        transparent
        opacity={0.35}
      />{" "}
    </mesh>
  );
}
