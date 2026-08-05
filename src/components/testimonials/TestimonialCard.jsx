import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function TestimonialCard({ image, name, role, review, active }) {
  return (
    <motion.div
      animate={{
        scale: active ? 1 : 0.92,
        opacity: active ? 1 : 0.45,
        y: active ? -10 : 0,
      }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`
    testimonial-card
    relative
    overflow-hidden
    rounded-[34px]
    border
    backdrop-blur-3xl
    p-10
    transition-all
    duration-700

    ${
      active
        ? "border-[#D4AF37]/30 bg-white/[0.06] shadow-[0_0_60px_rgba(212,175,55,.12)]"
        : "border-white/10 bg-white/[0.03]"
    }
  `}
    >
      <div
        className="
absolute
inset-0
rounded-[34px]
bg-gradient-to-b
from-white/[0.06]
via-transparent
to-transparent
pointer-events-none
"
      />
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="
            h-16
            w-16
            rounded-full
            object-cover
          "
        />
      </div>
      <div
        className="
absolute
right-8
top-8
text-[#D4AF37]/20
"
      >
        <Quote size={70} />
      </div>

      <div className="mt-8 flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={18} fill="#D4AF37" color="#D4AF37" />
        ))}
      </div>

      <p
        className="
          mt-8
          text-lg
          leading-9
          text-gray-300
        "
      >
        "{review}"
      </p>
      <div className="mt-10 flex items-center justify-between">
        <div>
          <h4 className="font-semibold text-white">{name}</h4>

          <p className="text-sm text-gray-500">{role}</p>
        </div>

        <div className="rounded-full border border-white/10 bg-white/5 px-5 py-2">
          <span className="tracking-[0.25em] text-[#D4AF37]">VERIFIED</span>
        </div>
      </div>
      <div
        className="
absolute
inset-0
opacity-0
group-hover:opacity-100
transition
duration-700
"
        style={{
          background: `
radial-gradient(
circle at var(--x) var(--y),
rgba(255,255,255,.15),
transparent 40%
)
`,
        }}
      />
    </motion.div>
  );
}
