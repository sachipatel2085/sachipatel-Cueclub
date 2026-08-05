import { useMotionValue } from "framer-motion";
import { useRef } from "react";

export default function useMouseTilt() {
  const cardRef = useRef();

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateYValue = ((x - rect.width / 2) / rect.width) * 10;

    const rotateXValue = -((y - rect.height / 2) / rect.height) * 10;

    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return {
    cardRef,
    rotateX,
    rotateY,
    handleMouseMove,
    handleMouseLeave,
  };
}
