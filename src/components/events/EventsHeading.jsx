export default function EventsHeading() {
  return (
    <div className="events-heading mx-auto max-w-6xl text-center">
      <div
        className="
          mx-auto
          mb-8
          h-px
          w-24
          bg-gradient-to-r
          from-transparent
          via-[#D4AF37]
          to-transparent
        "
      />

      <span
        className="
          text-sm
          uppercase
          tracking-[0.8em]
          text-[#D4AF37]
        "
      >
        EVENTS
      </span>

      <h2
        className="
          mt-8
          text-5xl
          font-black
          uppercase
          leading-[0.9]
          tracking-[-0.05em]
          text-white

          md:text-7xl

          xl:text-[120px]
        "
      >
        PLAY.
        <br />
        COMPETE.
        <br />
        WIN.
      </h2>

      <p
        className="
          mx-auto
          mt-10
          max-w-3xl
          text-lg
          leading-9
          text-gray-400
        "
      >
        Every week brings new competitions, exciting tournaments and
        unforgettable experiences for players of every level.
      </p>
    </div>
  );
}
