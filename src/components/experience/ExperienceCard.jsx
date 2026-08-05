import { ArrowUpRight } from "lucide-react";
import useMouseTilt from "../../hooks/useMouseTilt";

export default function ExperienceCard({ icon: Icon, title, description }) {
  const { cardRef, style, handleMouseMove, handleMouseLeave } = useMouseTilt();

  return (
    <div
      ref={cardRef}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="
      experience-card
        group
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-white/[0.04]
        p-10
        backdrop-blur-3xl
        transition-all
        duration-500
        hover:border-[#D4AF37]/30
        hover:shadow-[0_20px_80px_rgba(0,0,0,0.45)]
        hover:shadow-[#0D7C3E]/10
        min-h-[420px]
      "
    >
      {/* Cursor Light */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
        style={{
          background: `
            radial-gradient(
              320px circle at var(--mouse-x) var(--mouse-y),
              rgba(255,255,255,.12),
              transparent 55%
            )
          `,
        }}
      />

      {/* Green Glow */}
      <div
        className="
          absolute
          -left-28
          -bottom-28
          h-64
          w-64
          rounded-full
          bg-[#0D7C3E]/15
          blur-[120px]
          opacity-0
          transition-all
          duration-700
          group-hover:opacity-100
        "
      />

      {/* Gold Glow */}
      <div
        className="
          absolute
          -right-24
          -top-24
          h-64
          w-64
          rounded-full
          bg-[#D4AF37]/15
          blur-[120px]
          opacity-0
          transition-all
          duration-700
          group-hover:opacity-100
        "
      />

      {/* Content */}

      <div className="relative z-20">
        {/* Icon */}

        <div
          className="
          experience-icon
            mb-10
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-3xl
            border
            border-white/10
            bg-white/5
            text-[#D4AF37]
            transition-all
            duration-500
            group-hover:-translate-y-2
            group-hover:rotate-6
            group-hover:scale-110
          "
        >
          {Icon && <Icon size={34} strokeWidth={1.8} />}
        </div>

        {/* Title */}

        <h3
          className="
            text-3xl
            font-bold
            leading-tight
            text-white
          "
        >
          {title}
        </h3>

        {/* Description */}

        <p
          className="
            mt-6
            text-[17px]
            leading-8
            text-gray-400
          "
        >
          {description}
        </p>

        {/* Button */}

        <button
          className="
          experience-button
            mt-10
            flex
            items-center
            gap-3
            text-sm
            font-medium
            uppercase
            tracking-[0.25em]
            text-[#D4AF37]
            transition-all
            duration-500
            group-hover:translate-x-2
            group-hover:opacity-100
          "
        >
          Learn More
          <ArrowUpRight size={18} />
        </button>
      </div>

      {/* Bottom Border */}

      <div
        className="
          absolute
          bottom-0
          left-0
          h-[2px]
          w-0
          bg-gradient-to-r
          from-[#0D7C3E]
          via-[#D4AF37]
          to-[#0D7C3E]
          transition-all
          duration-700
          group-hover:w-full
        "
      />
    </div>
  );
}
