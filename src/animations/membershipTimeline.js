import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function membershipTimeline() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#membership",
      start: "top 70%",
      toggleActions: "play none none reverse",
    },
  });

  tl.from(".membership-label", {
    opacity: 0,
    y: 40,
    duration: 0.6,
  });

  tl.from(
    ".membership-title",
    {
      opacity: 0,
      y: 80,
      duration: 1,
      ease: "power4.out",
    },
    "-=0.3",
  );

  tl.from(
    ".membership-description",
    {
      opacity: 0,
      y: 30,
      duration: 0.8,
    },
    "-=0.5",
  );

  tl.from(
    ".membership-bronze",
    {
      opacity: 0,
      y: 120,
      scale: 0.9,
      filter: "blur(20px)",
      duration: 1,
    },
    "-=0.3",
  );

  tl.from(
    ".membership-elite",
    {
      opacity: 0,
      y: 120,
      scale: 0.9,
      filter: "blur(20px)",
      duration: 1,
    },
    "-=0.8",
  );

  tl.from(
    ".membership-gold",
    {
      opacity: 0,
      y: 160,
      scale: 0.8,
      filter: "blur(30px)",
      duration: 1.2,
      ease: "power4.out",
    },
    "-=0.4",
  );

  return tl;
  gsap.to(".membership-green-glow", {
    x: 120,
    y: -60,

    duration: 15,

    repeat: -1,

    yoyo: true,

    ease: "sine.inOut",
  });

  gsap.to(".membership-gold-glow", {
    x: -120,
    y: 60,

    duration: 18,

    repeat: -1,

    yoyo: true,

    ease: "sine.inOut",
  });
  gsap.to("#membership", {
    opacity: 0.4,

    scrollTrigger: {
      trigger: "#transition",

      start: "top bottom",

      end: "top center",

      scrub: true,
    },
  });
}
