import { useRef, useState } from "react";

export default function useGalleryGlow() {
  const cardRef = useRef();

  const [glow, setGlow] = useState({
    x: "50%",
    y: "50%",
  });

  function handleMouseMove(e) {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setGlow({
      x: `${(x / rect.width) * 100}%`,
      y: `${(y / rect.height) * 100}%`,
    });
  }

  function handleMouseLeave() {
    setGlow({
      x: "50%",
      y: "50%",
    });
  }

  return {
    cardRef,
    glow,
    handleMouseMove,
    handleMouseLeave,
  };
}
