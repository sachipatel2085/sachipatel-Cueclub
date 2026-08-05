import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import testimonials from "./testimonialsData";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [paused]);

  function next() {
    setActive((prev) => (prev + 1) % testimonials.length);
  }

  function previous() {
    setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  }

  return (
    <div
      className="relative mt-28"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative h-[430px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{
              opacity: 0,
              x: 150,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              x: -150,
              scale: 0.95,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-0"
          >
            <TestimonialCard {...testimonials[active]} active />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}

      <div className="mt-12 flex items-center justify-center gap-8">
        <button
          onClick={previous}
          className="rounded-full border border-white/10 bg-white/5 p-4 transition hover:border-[#D4AF37]/30"
        >
          <ChevronLeft />
        </button>

        <div className="flex gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`
                transition-all
                duration-500

                ${
                  active === index
                    ? "h-2 w-10 rounded-full bg-[#D4AF37]"
                    : "h-2 w-2 rounded-full bg-white/20"
                }
              `}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="rounded-full border border-white/10 bg-white/5 p-4 transition hover:border-[#D4AF37]/30"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
