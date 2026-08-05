import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function contactTimeline() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#contact",
      start: "top 70%",
    },
  });

  tl.from(".contact-label", {
    opacity: 0,
    y: 30,
    duration: 0.6,
  })

    .from(
      ".contact-title",
      {
        opacity: 0,
        y: 80,
        duration: 1,
        ease: "power4.out",
      },
      "-=0.3",
    )

    .from(
      ".contact-description",
      {
        opacity: 0,
        y: 40,
        duration: 0.8,
      },
      "-=0.5",
    )

    .from(
      ".booking-card",
      {
        opacity: 0,
        x: -120,
        scale: 0.95,
        filter: "blur(12px)",
        duration: 1,
        ease: "power4.out",
      },
      "-=0.3",
    )

    .from(
      ".contact-info-card",
      {
        opacity: 0,
        x: 120,
        stagger: 0.2,
        duration: 0.8,
        ease: "power4.out",
      },
      "-=0.8",
    );

  gsap.to(".contact-green-glow", {
    x: 120,
    y: -80,
    duration: 14,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  gsap.to(".contact-gold-glow", {
    x: -120,
    y: 80,
    duration: 16,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  gsap.to(".map-card", {
    yPercent: -12,
    ease: "none",
    scrollTrigger: {
      trigger: ".map-card",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
}
