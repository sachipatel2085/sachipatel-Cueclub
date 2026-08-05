import ExperienceHeading from "./ExperienceHeading";
import ExperienceGrid from "./ExperienceGrid";
import { useGSAP } from "@gsap/react";
import experienceTimeline from "../../animations/experienceTimeline";
import experienceFloating from "../../animations/experienceFloating";

export default function Experience() {
  useGSAP(() => {
    experienceTimeline();
    experienceFloating();
  });
  return (
    <section
      id="experience"
      className="
        relative
        overflow-hidden
        bg-[#060606]
        py-40
      "
    >
      {/* Background */}

      <div className=" absolute inset-0">
        <div
          className="
            absolute
            left-[-250px]
            top-40
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
            right-[-250px]
            bottom-20
            h-[650px]
            w-[650px]
            rounded-full
            bg-[#D4AF37]/10
            blur-[220px]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.02),transparent_60%)]
          "
        />
      </div>

      <div className="relative z-20 mx-auto max-w-[1500px] px-8">
        <ExperienceHeading />

        <ExperienceGrid />
      </div>
    </section>
  );
}
