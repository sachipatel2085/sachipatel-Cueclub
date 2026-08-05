import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function galleryTimeline() {
  gsap.from(".gallery-label", {
    opacity: 0,
    y: 40,
    duration: 0.8,

    scrollTrigger: {
      trigger: "#gallery",
      start: "top 75%",
    },
  });

  gsap.from(".gallery-title", {
    opacity: 0,
    y: 80,
    duration: 1,

    scrollTrigger: {
      trigger: "#gallery",
      start: "top 75%",
    },
  });

  gsap.from(".gallery-description", {
    opacity: 0,
    y: 40,
    duration: 0.8,

    scrollTrigger: {
      trigger: "#gallery",
      start: "top 75%",
    },
  });

  gsap.from(".gallery-hero", {
    scale: 1.15,

    opacity: 0,

    duration: 1.5,

    ease: "power4.out",

    scrollTrigger: {
      trigger: ".gallery-hero",
      start: "top 80%",
    },
  });

  gsap.utils.toArray(".gallery-item").forEach((item, index) => {
    gsap.from(item, {
      opacity: 0,

      y: 100,

      scale: 0.9,

      filter: "blur(12px)",

      duration: 1,

      delay: index * 0.08,

      ease: "power4.out",

      scrollTrigger: {
        trigger: item,
        start: "top 85%",
      },
    });
  });
  gsap.to(".gallery-image", {
    yPercent: 12,

    ease: "none",

    scrollTrigger: {
      trigger: ".gallery-hero",

      start: "top bottom",

      end: "bottom top",

      scrub: true,
    },
  });
}
