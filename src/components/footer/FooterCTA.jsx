import { ArrowRight } from "lucide-react";

export default function FooterCTA() {
  return (
    <div className="footer-cta text-center">
      <span
        className="
          text-sm
          uppercase
          tracking-[0.8em]
          text-[#D4AF37]
        "
      >
        READY TO PLAY?
      </span>

      <h2
        className="
          mt-6
          text-5xl
          font-black
          uppercase
          leading-[0.9]
          tracking-[-0.05em]
          text-white

          md:text-7xl

          xl:text-[90px]
        "
      >
        BOOK YOUR
        <br />
        NEXT GAME.
      </h2>

      <p
        className="
          mx-auto
          mt-8
          max-w-2xl
          text-lg
          leading-8
          text-gray-400
        "
      >
        Join Coventry's most premium cue sports destination today.
      </p>

      <button
        className="
          group
          mt-12
          inline-flex
          items-center
          gap-3
          rounded-full
          bg-gradient-to-r
          from-[#D4AF37]
          to-[#E7C96B]
          px-9
          py-5
          font-semibold
          text-black
          transition-all
          duration-500
          hover:-translate-y-1
          hover:shadow-[0_0_45px_rgba(212,175,55,.4)]
        "
      >
        Book a Table
        <ArrowRight
          className="
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        />
      </button>
    </div>
  );
}
