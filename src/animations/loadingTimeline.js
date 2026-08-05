import gsap from "gsap";

export default function loadingTimeline(loaderRef, setProgress) {
  const counter = { value: 0 };

  const tl = gsap.timeline({
    defaults: {
      ease: "power3.out",
    },
  });

  // Logo
  tl.from(".loader-logo", {
    y: 40,
    opacity: 0,
    duration: 0.8,
  });

  // Progress line + percentage together
  tl.to(
    ".loader-line",
    {
      width: 260,
      duration: 2.5,
      ease: "power2.inOut",
    },
    0.6,
  );

  tl.to(
    counter,
    {
      value: 100,
      duration: 2.5,
      ease: "none",
      onUpdate: () => {
        setProgress(Math.round(counter.value));
      },
    },
    0.6,
  );

  // Fade loader only after percentage reaches 100%
  tl.to(loaderRef.current, {
    opacity: 0,
    duration: 0.8,
    delay: 0.3,
    pointerEvents: "none",
  });

  return tl;
}
