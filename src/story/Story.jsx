import storyStatsTimeline from "../animations/storyStatsTimeline";
import storyTimeline from "../animations/storyTimeline";
import StoryHeading from "./StoryHeading";
import StoryStats from "./StoryStats";
import { useGSAP } from "@gsap/react";

export default function Story() {
  useGSAP(() => {
    storyTimeline();
    storyStatsTimeline();
  }, []);
  return (
    <section id="story" className="relative min-h-[500vh] bg-[#050505]">
      {/* Luxury background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            left-[-250px]
            top-1/2
            h-[700px]
            w-[700px]
            rounded-full
            bg-[#0D7C3E]/10
            blur-[220px]
          "
        />

        <div
          className="
            absolute
            right-[-200px]
            top-20
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#D4AF37]/10
            blur-[220px]
          "
        />
      </div>

      <StoryHeading />

      <StoryStats />
    </section>
  );
}
