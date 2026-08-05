import HeroBackground from "./HeroBackground";
import HeroScene from "./HeroScene";
import HeroContent from "./HeroContent";
import ScrollIndicator from "./ScrollIndicator";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import heroMasterTimeline from "../../animations/heroMasterTimeline.jsx";

export default function Hero() {
  const heroRef = useRef();

  useGSAP(() => {
    heroMasterTimeline();
  }, []);
  return (
    <section
      id="home"
      ref={heroRef}
      className="relative h-screen overflow-hidden bg-[#0B0B0B]"
    >
      <HeroBackground />

      <div className="relative z-20 mx-auto grid h-full max-w-[1400px] grid-cols-12 px-8">
        <div className="col-span-6 flex items-center">
          <HeroContent />
        </div>

        <div className="col-span-6">
          <HeroScene />
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
