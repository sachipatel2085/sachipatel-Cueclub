export default function HeroBackground() {
  return (
    <>
      {/* Main Background */}
      <div className="absolute inset-0 bg-[#0B0B0B]" />

      {/* Green Glow */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-700/10 blur-[160px]" />

      {/* Gold Accent */}
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-yellow-400/10 blur-[180px]" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
    </>
  );
}
