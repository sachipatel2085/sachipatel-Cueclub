import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function storyTimeline() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#story",
      start: "top top",
      end: "+=2500",
      scrub: 1,
      pin: ".story-pin",
    },
  });

  tl.to(".story-one-wrapper", {
    opacity: 0,
    y: -120,
    duration: 1,
  });

  tl.to(
    ".story-two-wrapper",
    {
      opacity: 1,
      y: -120,
      duration: 1,
    },
    "<",
  );

  return tl;
}
