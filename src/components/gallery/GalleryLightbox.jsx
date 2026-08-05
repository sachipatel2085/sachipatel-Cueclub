import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

export default function GalleryLightbox({ selectedImage, setSelectedImage }) {
  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    }

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [setSelectedImage]);
  return (
    <AnimatePresence>
      {selectedImage && (
        <motion.div
          className="
fixed
inset-0
z-[200]
flex
items-center
justify-center
bg-black/90
backdrop-blur-xl
p-10
"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            layoutId={`gallery-${selectedImage.id}`}
            className="
relative
w-full
max-w-7xl
overflow-hidden
rounded-[36px]
"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="
w-full
max-h-[85vh]
object-cover
"
            />

            <div
              className="
absolute
inset-0
bg-gradient-to-t
from-black
via-transparent
to-transparent
"
            />

            <div
              className="
absolute
bottom-10
left-10
"
            >
              <span
                className="
text-sm
uppercase
tracking-[0.4em]
text-[#D4AF37]
"
              >
                {selectedImage.category}
              </span>

              <h2
                className="
mt-4
text-5xl
font-black
text-white
"
              >
                {selectedImage.title}
              </h2>
            </div>

            <button
              onClick={() => setSelectedImage(null)}
              className="
absolute
right-8
top-8
flex
h-14
w-14
items-center
justify-center
rounded-full
border
border-white/10
bg-white/10
backdrop-blur-xl
transition
hover:bg-white/20
"
            >
              <X size={26} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
