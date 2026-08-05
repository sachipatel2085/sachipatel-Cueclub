import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import navigation from "../../data/navigation";

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-2xl"
        >
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex h-full flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-6">
              <div>
                <h2 className="text-xl font-bold tracking-[0.3em] text-white">
                  CUE CLUB
                </h2>

                <p className="text-xs tracking-[0.4em] text-gray-400">
                  COVENTRY
                </p>
              </div>

              <button
                onClick={onClose}
                aria-label="Close Menu"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-white transition hover:bg-white/10"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex flex-1 items-center justify-center">
              <ul className="space-y-8 text-center">
                {navigation.map((item, index) => (
                  <motion.li
                    key={item.title}
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.1 + index * 0.08,
                    }}
                  >
                    <a
                      href={item.href}
                      onClick={onClose}
                      className="
                        group
                        text-3xl
                        font-semibold
                        tracking-[0.25em]
                        text-white
                        transition
                        hover:text-yellow-400
                      "
                    >
                      {item.title}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Footer CTA */}
            <div className="px-6 pb-10">
              <button
                className="
                  w-full
                  rounded-full
                  bg-gradient-to-r
                  from-yellow-500
                  to-yellow-400
                  py-4
                  text-lg
                  font-semibold
                  text-black
                  transition
                  hover:scale-[1.02]
                  hover:shadow-[0_0_35px_rgba(212,175,55,.35)]
                "
              >
                Book a Table
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
