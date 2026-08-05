export default function GalleryHero() {
  return (
    <div
      className="
      gallery-hero
        relative
        mt-28
        h-[75vh]
        overflow-hidden
        rounded-[40px]
      "
    >
      <img
        src="/gallery/hero.jpg"
        alt="Cue Club"
        className="
        gallery-image
          h-full
          w-full
          object-cover
        "
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

      <div className="absolute bottom-16 left-16">
        <span
          className="
            text-sm
            uppercase
            tracking-[0.5em]
            text-[#D4AF37]
          "
        >
          CHAMPIONSHIP VENUE
        </span>

        <h3
          className="
            mt-4
            text-5xl
            font-black
            text-white
          "
        >
          The Home Of
          <br />
          Cue Sports.
        </h3>
      </div>
    </div>
  );
}
