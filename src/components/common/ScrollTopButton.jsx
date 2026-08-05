import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import useScrollTop from "../../hooks/useScrollTop";
import { useLenis } from "lenis/react";

export default function ScrollTopButton() {
  const visible = useScrollTop();
  const lenis = useLenis();

  function scrollTop() {
    if (lenis) {
      lenis.scrollTo(0, {
        duration: 2,
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{
            opacity: 0,
            scale: 0.5,
            y: 80,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.5,
            y: 80,
          }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          onClick={scrollTop}
          className="
            group
            fixed
bottom-6
right-6
md:bottom-10
md:right-10
            z-[999]
            flex
            h-16
            w-16
            items-center
            justify-center
            overflow-hidden
            rounded-full
            border
            border-white/10
            bg-white/[0.05]
            backdrop-blur-3xl
            transition-all
            duration-500
            hover:-translate-y-1
            hover:border-[#D4AF37]/40
            hover:shadow-[0_0_35px_rgba(212,175,55,.35)]
          "
        >
          {/* Reflection */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-b
              from-white/10
              via-transparent
              to-transparent
            "
          />

          {/* Pulse */}
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.25, 0, 0.25],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              h-full
              w-full
              rounded-full
              border
              border-[#D4AF37]/20
            "
          />

          <ArrowUp
            size={24}
            className="
              relative
              z-10
              text-white
              transition-all
              duration-300
              group-hover:-translate-y-1
              group-hover:text-[#D4AF37]
            "
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
