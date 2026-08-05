import { MapPinned } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactMap() {
  return (
    <motion.div
      animate={{
        y: [0, -6, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
    contact-info-card
    map-card
    overflow-hidden
    rounded-[34px]
    border
    border-white/10
    bg-white/[0.03]
    backdrop-blur-3xl
  "
    >
      <div
        className="
absolute
inset-0
pointer-events-none
rounded-[34px]
bg-gradient-to-b
from-white/[0.06]
via-transparent
to-transparent
"
      />
      <div
        className="
          flex
          h-[320px]
          flex-col
          items-center
          justify-center
          bg-gradient-to-br
          from-[#111111]
          to-[#1A1A1A]
        "
      >
        <MapPinned size={50} className="text-[#D4AF37]" />

        <h3 className="mt-6 text-2xl font-bold text-white">Google Map</h3>

        <p className="mt-2 text-gray-400">
          Interactive map will be embedded here.
        </p>
      </div>
    </motion.div>
  );
}
