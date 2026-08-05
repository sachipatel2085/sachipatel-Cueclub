import gsap from "gsap";

export default function experienceFloating() {
  gsap.utils.toArray(".experience-card").forEach((card, index) => {
    gsap.to(card, {
      y: -8,
      duration: 3 + index * 0.4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: index * 0.2,
    });
  });
}
