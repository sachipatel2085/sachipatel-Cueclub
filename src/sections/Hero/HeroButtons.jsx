export default function HeroButtons() {
  return (
    <div className="hero-buttons mt-10 flex flex-wrap gap-5">
      <button
        className="
          rounded-full
          bg-gradient-to-r
          from-yellow-500
          to-yellow-400
          px-8
          py-4
          font-semibold
          text-black
          transition-all
          duration-500
          hover:-translate-y-1
          hover:shadow-[0_0_40px_rgba(212,175,55,.35)]
        "
      >
        Book a Table
      </button>

      <button
        className="
          rounded-full
          border
          border-white/10
          bg-white/5
          px-8
          py-4
          text-white
          backdrop-blur-xl
          transition-all
          duration-500
          hover:border-white/20
          hover:bg-white/10
        "
      >
        Explore Club
      </button>
    </div>
  );
}
