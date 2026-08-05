export default function MembershipHeading() {
  return (
    <div className="mx-auto max-w-6xl text-center">
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
          membership-label
          text-sm
          uppercase
          tracking-[0.8em]
          text-[#D4AF37]
        "
      >
        MEMBERSHIP
      </span>

      <h2
        className="
          membership-title
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
        CHOOSE
        <br />
        YOUR EXPERIENCE.
      </h2>

      <p
        className="
          membership-description
          mx-auto
          mt-10
          max-w-3xl
          text-lg
          leading-9
          text-gray-400
        "
      >
        Whether you're here for a casual game, weekly competitions, or
        championship-level play, there's a membership designed around your
        experience.
      </p>
    </div>
  );
}
