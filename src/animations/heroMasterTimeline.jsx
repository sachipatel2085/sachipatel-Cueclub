import gsap from "gsap";
import heroTextAnimation from "./heroText";

export default function heroMasterTimeline() {
  const tl = gsap.timeline({
    defaults: {
      ease: "power4.out",
    },
  });

  // Background
  tl.from(".hero-scene", {
    opacity: 0,
    scale: 0.92,
    duration: 1.8,
  });

  // Badge
  tl.from(
    ".hero-badge",
    {
      y: 20,
      opacity: 0,
      duration: 0.6,
    },
    "-=1.2",
  );

  // Headline
  tl.call(() => {
    heroTextAnimation();
  });

  // Description
  tl.from(
    ".hero-description",
    {
      y: 40,
      opacity: 0,
      duration: 0.8,
    },
    "-=0.6",
  );

  // Buttons
  tl.from(
    ".hero-buttons",
    {
      y: 30,
      opacity: 0,
      duration: 0.8,
    },
    "-=0.4",
  );

  // Scroll indicator
  tl.from(
    ".scroll-indicator",
    {
      opacity: 0,
      y: 20,
      duration: 0.8,
    },
    "-=0.3",
  );

  return tl;
}
