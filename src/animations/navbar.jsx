import gsap from "gsap";

export default function navbarAnimation(ref) {
  gsap.from(ref.current, {
    y: -80,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out",
  });
}
