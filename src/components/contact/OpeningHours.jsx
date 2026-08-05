import { motion } from "framer-motion";

export default function OpeningHours() {
  const Row = ({ day, time }) => (
    <motion.div
      animate={{
        y: [0, -6, 0],
      }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="flex  justify-between border-b border-white/10 py-3"
    >
      <span className="text-gray-300">{day}</span>
      <span className="font-medium text-white">{time}</span>
    </motion.div>
  );

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
      <h3 className="text-2xl font-bold text-white">Opening Hours</h3>

      <div className="mt-6">
        <Row day="Monday - Thursday" time="10:00 - 23:00" />
        <Row day="Friday" time="10:00 - 00:00" />
        <Row day="Saturday" time="09:00 - 00:00" />
        <Row day="Sunday" time="09:00 - 22:00" />
      </div>
    </motion.div>
  );
}
