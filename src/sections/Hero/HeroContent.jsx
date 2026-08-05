import HeroButtons from "./HeroButtons";

export default function HeroContent() {
  return (
    <div className="flex h-full items-center justify-start">
      {" "}
      <div className="max-w-xl max-w-[1400px] px-6">
        <span className="hero-badge mb-5 inline-block rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm tracking-[0.3em] text-gray-300 backdrop-blur-xl">
          PREMIUM CUE SPORTS CLUB
        </span>

        <h1 className="hero-title max-w-2xl text-3xl font-black leading-none text-white md:text-4xl xl:text-[50px]">
          THE ULTIMATE
          <br />
          CUE SPORTS
          <br />
          EXPERIENCE
        </h1>

        <p className="hero-description mt-8 max-w-xl text-lg leading-8 text-gray-400">
          Discover luxury tables, championship tournaments, premium lounges, and
          unforgettable cue sports experiences in the heart of Coventry.
        </p>

        <HeroButtons />
      </div>
    </div>
  );
}
