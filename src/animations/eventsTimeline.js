import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function eventsTimeline() {
  // Heading
  gsap.from(".events-heading", {
    opacity: 0,
    y: 60,
    duration: 1,
    scrollTrigger: {
      trigger: "#events",
      start: "top 75%",
    },
  });

  // Draw timeline
  gsap.to(".timeline-line", {
    scaleY: 1,
    ease: "none",
    scrollTrigger: {
      trigger: ".timeline-line",
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
    },
  });

  // Cards
  gsap.utils.toArray(".event-card").forEach((card, index) => {
    gsap.from(card, {
      opacity: 0,
      x: index % 2 === 0 ? -120 : 120,
      y: 60,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
      },
    });
  });
  // Timeline dots
  gsap.utils.toArray(".timeline-dot").forEach((dot) => {
    gsap.from(dot, {
      scale: 0,
      duration: 0.5,
      ease: "back.out(2)",
      scrollTrigger: {
        trigger: dot,
        start: "top 80%",
      },
    });
  });

  // Floating background glows
  gsap.to(".events-green-glow", {
    x: 80,
    y: -50,
    duration: 12,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  gsap.to(".events-gold-glow", {
    x: -80,
    y: 50,
    duration: 15,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
}
