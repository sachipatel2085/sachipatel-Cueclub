import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactInfo() {
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
      className="contact-info-card relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-3xl"
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
      <h3 className="text-2xl font-bold text-white">Contact Information</h3>

      <div className="mt-8 space-y-6">
        <div className="flex items-center gap-4">
          <Phone className="text-[#D4AF37]" />
          <span className="text-gray-300">+44 0000 000000</span>
        </div>

        <div className="flex items-center gap-4">
          <Mail className="text-[#D4AF37]" />
          <span className="text-gray-300">info@cueclubcoventry.com</span>
        </div>

        <div className="flex items-center gap-4">
          <MapPin className="text-[#D4AF37]" />
          <span className="text-gray-300">Coventry, United Kingdom</span>
        </div>
      </div>
    </motion.div>
  );
}
