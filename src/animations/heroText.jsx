import gsap from "gsap";
import SplitType from "split-type";

export default function heroTextAnimation() {
  const split = new SplitType(".hero-title", {
    types: "words",
  });

  gsap.from(split.words, {
    opacity: 0,
    y: 120,
    rotateX: -90,
    stagger: 0.08,
    duration: 1,
    ease: "power4.out",
  });
}
