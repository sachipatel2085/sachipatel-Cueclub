import useGalleryGlow from "../../hooks/useGalleryGlow";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function GalleryItem({
  id,
  image,
  title,
  category,
  size,
  setSelectedImage,
}) {
  const { cardRef, glow, handleMouseMove, handleMouseLeave } = useGalleryGlow();
  return (
    <motion.div
      ref={cardRef}
      layoutId={`gallery-${id}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() =>
        setSelectedImage({
          id,
          image,
          title,
          category,
        })
      }
      className={`
    gallery-item
    group
    relative
    overflow-hidden
    rounded-[28px]
    cursor-pointer

    ${
      size === "large"
        ? "row-span-2 h-[620px]"
        : size === "medium"
          ? "h-[420px]"
          : "h-[300px]"
    }
  `}
    >
      <img
        src={image}
        alt={title}
        className="
          h-full
          w-full
          object-cover
          transition-all
          duration-700
          group-hover:scale-110
        "
      />
      <div
        className="
absolute
inset-0
opacity-0
transition
duration-500
group-hover:opacity-100
"
        style={{
          background: `
      radial-gradient(
      circle at ${glow.x} ${glow.y},
      rgba(255,255,255,.18),
      transparent 45%
      )
    `,
        }}
      />

      <div
        className="
absolute
inset-0
bg-gradient-to-t
from-black
via-black/20
to-transparent
opacity-0
transition-all
duration-700
group-hover:opacity-100
"
      />
      <div
        className="
absolute
bottom-8
left-8
translate-y-10
opacity-0
transition-all
duration-700
group-hover:translate-y-0
group-hover:opacity-100
"
      >
        <span
          className="
text-xs
uppercase
tracking-[0.35em]
text-[#D4AF37]
"
        >
          {category}
        </span>

        <h3
          className="
mt-3
text-3xl
font-bold
text-white
"
        >
          {title}
        </h3>

        <div
          className="
mt-5
flex
items-center
gap-2
text-[#D4AF37]
"
        >
          View
          <ArrowUpRight size={18} />
        </div>
      </div>
    </motion.div>
  );
}
