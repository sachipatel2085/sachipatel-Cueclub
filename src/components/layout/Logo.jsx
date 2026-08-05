export default function Logo() {
  return (
    <a href="#" className="group">
      <div className="flex items-center gap-3">
        <div
          className="
          h-11
          w-11
          rounded-full
          bg-gradient-to-br
          from-yellow-400
          to-green-700
          shadow-lg
          transition-all
          duration-500
          group-hover:scale-110
          group-hover:rotate-12
        "
        />

        <div>
          <h1 className="text-white font-bold tracking-widest">CUE CLUB</h1>

          <p className="text-xs text-gray-400 tracking-[0.35em]">COVENTRY</p>
        </div>
      </div>
    </a>
  );
}
