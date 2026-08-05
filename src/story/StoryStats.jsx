export default function StoryStats() {
  return (
    <section className="relative z-20">
      <div className="h-screen flex items-center justify-center">
        <div className="stat-one text-center opacity-0">
          <h2
            className="
    stat-number
    text-7xl
    sm:text-8xl
    md:text-[120px]
    lg:text-[150px]
    xl:text-[180px]
    font-black
    text-transparent
    bg-clip-text
    bg-gradient-to-b
    from-[#F8E7A3]
    to-[#D4AF37]
    drop-shadow-[0_0_40px_rgba(212,175,55,0.35)]
  "
          >
            0
          </h2>

          <p className="text-3xl tracking-[0.35em] text-white">
            PROFESSIONAL TABLES
          </p>
        </div>
      </div>

      <div className="h-screen flex items-center justify-center">
        <div className="stat-two text-center opacity-0">
          <h2
            className="
    stat-number-two
    text-7xl
    sm:text-8xl
    md:text-[120px]
    lg:text-[150px]
    xl:text-[180px]
    font-black
    text-transparent
    bg-clip-text
    bg-gradient-to-b
    from-[#F8E7A3]
    to-[#D4AF37]
    drop-shadow-[0_0_40px_rgba(212,175,55,0.35)]
  "
          >
            0
          </h2>
          <p className="text-3xl tracking-[0.35em] text-white">MEMBERS</p>
        </div>
      </div>
    </section>
  );
}
