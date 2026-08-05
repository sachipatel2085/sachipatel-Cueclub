export default function StoryHeading() {
  return (
    <div className="story-pin sticky top-0 flex h-screen items-center justify-center overflow-hidden">
      <div className="relative flex h-[420px] w-full max-w-7xl items-center justify-center">
        {/* STORY 1 */}
        <div className="story-one-wrapper absolute inset-0 flex flex-col items-center justify-center">
          <div className="mb-8 h-px w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          <span
            className="
              story-one-small
              mb-6
              text-sm
              font-medium
              uppercase
              tracking-[0.8em]
              text-[#D4AF37]
            "
          >
            NOT JUST
          </span>

          <h2
            className="
              story-one
              text-center
              font-black
              uppercase
              leading-[0.85]
              tracking-[-0.06em]
              text-white

              text-6xl
              md:text-8xl
              xl:text-[140px]
            "
          >
            A POOL
            <br />
            CLUB.
          </h2>
        </div>

        {/* STORY 2 */}
        <div className="story-two-wrapper absolute inset-0 flex flex-col items-center justify-center opacity-0">
          <div className="mb-8 h-px w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          <span
            className="
              story-two-small
              mb-6
              text-sm
              font-medium
              uppercase
              tracking-[0.8em]
              text-[#D4AF37]
            "
          >
            BUT
          </span>

          <h2
            className="
              story-two
              text-center
              font-black
              uppercase
              leading-[0.85]
              tracking-[-0.06em]
              text-white

              text-6xl
              md:text-8xl
              xl:text-[140px]
            "
          >
            A DESTINATION
            <br />
            FOR CHAMPIONS.
          </h2>
        </div>
      </div>
    </div>
  );
}
