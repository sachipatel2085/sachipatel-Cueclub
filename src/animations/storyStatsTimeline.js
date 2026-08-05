import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function storyStatsTimeline() {
  // ---------- FIRST STAT ----------
  const stat1 = { value: 0 };

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".stat-one",
        start: "top 70%",
        end: "top 30%",
        toggleActions: "play none none reverse",
      },
    })
    .to(".stat-one", {
      opacity: 1,
      y: -30,
      duration: 0.8,
    })
    .to(
      stat1,
      {
        value: 15,
        duration: 1.8,
        ease: "power2.out",
        onUpdate: () => {
          document.querySelector(".stat-number").textContent = Math.floor(
            stat1.value,
          );
        },
      },
      "<",
    );

  // ---------- SECOND STAT ----------
  const stat2 = { value: 0 };

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".stat-two",
        start: "top 70%",
        end: "top 30%",
        toggleActions: "play none none reverse",
      },
    })
    .to(".stat-two", {
      opacity: 1,
      y: -30,
      duration: 0.8,
    })
    .to(
      stat2,
      {
        value: 5000,
        duration: 2,
        ease: "power2.out",
        onUpdate: () => {
          document.querySelector(".stat-number-two").textContent =
            Math.floor(stat2.value) + "+";
        },
      },
      "<",
    );
  gsap.fromTo(
    ".stat-number",
    { scale: 1 },
    {
      scale: 1.05,
      duration: 0.4,
      yoyo: true,
      repeat: 1,
      ease: "power2.out",
    },
  );
}
