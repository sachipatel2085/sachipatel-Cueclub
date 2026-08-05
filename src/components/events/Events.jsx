import eventsTimeline from "../../animations/eventsTimeline";
import EventsHeading from "./EventsHeading";
import EventsTimeline from "./EventsTimeline";
import { useGSAP } from "@gsap/react";

export default function Events() {
  useGSAP(() => {
    eventsTimeline();
  });
  return (
    <section
      id="events"
      className="
        relative
        overflow-hidden
        bg-[#070707]
        py-40
      "
    >
      <div className="absolute inset-0">
        <div
          className="
          events-green-glow
            absolute
            left-[-250px]
            top-20
            h-[700px]
            w-[700px]
            rounded-full
            bg-[#0D7C3E]/10
            blur-[220px]
          "
        />

        <div
          className="
          events-gold-glow
            absolute
            right-[-250px]
            bottom-0
            h-[650px]
            w-[650px]
            rounded-full
            bg-[#D4AF37]/10
            blur-[220px]
          "
        />
      </div>

      <div className="relative z-20 mx-auto max-w-[1500px] px-8">
        <EventsHeading />

        <EventsTimeline />
      </div>
    </section>
  );
}
