import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function CameraRig({ children }) {
  const { camera } = useThree();

  const mouse = useRef(new THREE.Vector2());

  const target = useRef(new THREE.Vector3(0, 1.2, 8));

  const isMobile = window.matchMedia("(pointer: coarse)").matches;

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (!isMobile) {
      target.current.x = mouse.current.x * 0.5;

      target.current.y = 1.2 + mouse.current.y * 0.3;
    }

    target.current.y += Math.sin(t * 0.4) * 0.08;

    target.current.z = 8 + Math.sin(t * 0.25) * 0.15;

    camera.position.lerp(target.current, 0.05);

    camera.lookAt(2, 0, 0);
  });

  useGSAP(() => {
    gsap.to(camera.position, {
      z: 5,
      x: -1.5,
      scrollTrigger: {
        trigger: "#home",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  });
  useGSAP(() => {
    gsap.to(".scroll-arrow", {
      y: 10,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  });

  return <group>{children}</group>;
}
