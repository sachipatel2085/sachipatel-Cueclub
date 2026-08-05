import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import useMouseTilt from "../../hooks/useMouseTilt";

export default function MembershipCard({
  name,
  price,
  duration,
  description,
  features,
  icon: Icon,
  popular,
  accent,
  delay,
}) {
  const { cardRef, rotateX, rotateY, glow, handleMouseMove, handleMouseLeave } =
    useMouseTilt();

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        y: {
          repeat: Infinity,
          duration: 6 + delay,
          ease: "easeInOut",
        },
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`
        membership-card
        group
        relative
        overflow-hidden
        rounded-[36px]
        border
        backdrop-blur-3xl
        transition-all
        duration-700
        cursor-pointer

        ${
          popular
            ? "border-[#D4AF37]/40 bg-white/[0.06] scale-105 lg:-translate-y-6 shadow-[0_30px_80px_rgba(212,175,55,.18)]"
            : "border-white/10 bg-white/[0.03]"
        }
      `}
    >
      {/* Cursor Light */}
      <div
        className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: `
          rgba(255,255,255,.15),
          transparent 45%)`,
        }}
      />

      {/* Top Reflection */}
      <div className="absolute inset-0 rounded-[36px] bg-gradient-to-b from-white/[0.06] via-transparent to-transparent" />

      {/* Green Glow */}
      <div className="absolute -bottom-40 -left-24 h-72 w-72 rounded-full bg-[#0D7C3E]/20 blur-[120px] opacity-0 transition duration-700 group-hover:opacity-100" />

      {/* Gold Glow */}
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#D4AF37]/20 blur-[120px] opacity-0 transition duration-700 group-hover:opacity-100" />

      {/* Popular Badge */}
      {popular && (
        <div className="absolute right-6 top-6 z-30 flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/15 px-4 py-2 backdrop-blur-xl">
          <Sparkles size={14} className="text-[#D4AF37]" />
          <span className="text-xs font-semibold tracking-[0.2em] text-[#D4AF37]">
            MOST POPULAR
          </span>
        </div>
      )}

      <div
        className="relative z-20 p-10"
        style={{ transform: "translateZ(60px)" }}
      >
        {/* Plan */}
        <span
          className="text-sm uppercase tracking-[0.6em]"
          style={{ color: accent }}
        >
          {name}
        </span>

        {/* Price */}
        <div className="mt-8 flex items-end gap-2">
          <h3 className="text-6xl font-black text-white">{price}</h3>

          <span className="pb-2 text-lg text-gray-400">{duration}</span>
        </div>

        <p className="mt-8 leading-8 text-gray-400">{description}</p>

        {/* Divider */}
        <div className="my-10 h-px bg-white/10" />

        {/* Features */}
        <div className="space-y-5">
          {features.map((feature) => (
            <motion.div
              key={feature}
              whileHover={{ x: 6 }}
              className="flex items-center gap-4"
            >
              <div
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10"
                style={{
                  backgroundColor: `${accent}20`,
                }}
              >
                <Icon
                  size={16}
                  style={{
                    color: accent,
                  }}
                />
              </div>

              <span className="text-gray-300">{feature}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.button
          whileHover={{
            y: -3,
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.98,
          }}
          className={`
            mt-12
            flex
            w-full
            items-center
            justify-center
            gap-3
            rounded-full
            py-4
            font-semibold
            transition-all
            duration-500

            ${
              popular
                ? "bg-gradient-to-r from-[#D4AF37] to-[#E8C75D] text-black shadow-[0_0_35px_rgba(212,175,55,.35)]"
                : "border border-white/10 bg-white/5 text-white hover:border-[#D4AF37]/30"
            }
          `}
        >
          Join Membership
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </motion.button>
      </div>
    </motion.div>
  );
}
