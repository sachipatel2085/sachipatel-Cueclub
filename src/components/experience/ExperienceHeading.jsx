export default function ExperienceHeading() {
  return (
    <div className="experience-heading mx-auto max-w-7xl text-center">
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
          block
          text-sm
          font-medium
          uppercase
          tracking-[0.8em]
          text-[#D4AF37]
        "
      >
        CLUB EXPERIENCE
      </span>

      <h2
        className="
          mt-8
          text-5xl
          font-black
          uppercase
          leading-[0.88]
          tracking-[-0.05em]
          text-white

          md:text-7xl

          xl:text-[120px]
        "
      >
        CRAFTED
        <br />
        FOR EVERY PLAYER.
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
        Every detail inside Cue Club has been designed to deliver
        championship-quality play, luxury comfort and unforgettable moments both
        on and off the table.
      </p>
    </div>
  );
}
