import eventsData from "./eventsData";
import EventCard from "./EventCard";

export default function EventsTimeline() {
  return (
    <div className="relative mx-auto mt-32 max-w-7xl">
      {/* Center Timeline */}

      <div
        className="
          timeline-line
          absolute
          left-1/2
          top-0
          hidden
          h-full
          w-px
          -translate-x-1/2
          bg-gradient-to-b
          from-[#D4AF37]
          via-white/20
          to-[#0D7C3E]
          lg:block
        "
      />

      {/* Mobile Timeline */}

      <div
        className="
          timeline-line-mobile
          absolute
          left-6
          top-0
          h-full
          w-px
          bg-gradient-to-b
          from-[#D4AF37]
          via-white/20
          to-[#0D7C3E]
          lg:hidden
        "
      />

      <div className="space-y-24">
        {eventsData.map((event, index) => (
          <EventCard key={event.id} {...event} reverse={index % 2 !== 0} />
        ))}
      </div>
    </div>
  );
}
