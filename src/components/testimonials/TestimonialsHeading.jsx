import { Star } from "lucide-react";

export default function TestimonialsHeading() {
  return (
    <div className="mx-auto max-w-5xl text-center">
      <div className="mx-auto mb-8 h-px w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      <span
        className="
        testimonials-label
        text-sm
        uppercase
        tracking-[0.8em]
        text-[#D4AF37]
      "
      >
        TESTIMONIALS
      </span>

      <h2
        className="
        testimonials-title
        mt-8
        text-5xl
        font-black
        uppercase
        leading-[0.9]
        tracking-[-0.05em]
        text-white

        md:text-7xl
        xl:text-[120px]
      "
      >
        TRUSTED BY
        <br />
        THOUSANDS OF PLAYERS.
      </h2>

      <div className="mt-10 flex justify-center items-center gap-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={22} fill="#D4AF37" color="#D4AF37" />
        ))}

        <span className="rating-counter ml-4 text-2xl font-bold text-white">
          0
        </span>

        <span className="text-gray-400">Google Reviews</span>
      </div>
    </div>
  );
}
