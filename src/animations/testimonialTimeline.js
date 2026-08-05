import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function testimonialTimeline() {
  gsap.from(".testimonials-label", {
    opacity: 0,
    y: 30,
    duration: 0.7,
    scrollTrigger: {
      trigger: "#testimonials",
      start: "top 75%",
    },
  });

  gsap.from(".testimonials-title", {
    opacity: 0,
    y: 70,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
      trigger: "#testimonials",
      start: "top 75%",
    },
  });

  gsap.from(".testimonial-card", {
    opacity: 0,
    y: 100,
    stagger: 0.2,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".testimonial-card",
      start: "top 80%",
    },
  });

  const counter = { value: 0 };

  gsap.to(counter, {
    value: 4.9,
    duration: 2,
    ease: "power2.out",
    onUpdate: () => {
      document.querySelector(".rating-counter").textContent =
        counter.value.toFixed(1);
    },
    scrollTrigger: {
      trigger: "#testimonials",
      start: "top 75%",
    },
  });

  gsap.to(".testimonials-green-glow", {
    x: 100,
    duration: 14,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  gsap.to(".testimonials-gold-glow", {
    x: -100,
    duration: 16,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
}
