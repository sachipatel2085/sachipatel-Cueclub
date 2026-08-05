import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function experienceTimeline() {
  gsap.from(".experience-heading", {
    y: 80,
    opacity: 0,
    filter: "blur(10px)",
    duration: 1.2,
    ease: "power4.out",
    clearProps: "filter",
    scrollTrigger: {
      trigger: ".experience-heading",
      start: "top 80%",
      once: true,
    },
  });

  gsap.from(".experience-card", {
    y: 100,
    opacity: 0,
    scale: 0.9,
    duration: 1,
    stagger: 0.15,
    ease: "power4.out",
    clearProps: "filter,opacity,transform",
    scrollTrigger: {
      trigger: ".experience-grid",
      start: "top 75%",
      once: true,
    },
  });

  gsap.from(".experience-icon", {
    y: 20,
    opacity: 0,
    rotate: -15,
    duration: 0.8,
    stagger: 0.15,
    ease: "back.out(1.7)",
    clearProps: "transform,opacity",
    scrollTrigger: {
      trigger: ".experience-grid",
      start: "top 75%",
      once: true,
    },
  });
}
