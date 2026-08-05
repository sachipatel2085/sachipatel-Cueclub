import TestimonialsHeading from "./TestimonialsHeading";
import TestimonialCarousel from "./TestimonialCarousel";
import { useGSAP } from "@gsap/react";
import testimonialTimeline from "../../animations/testimonialTimeline";

export default function Testimonials() {
  useGSAP(() => {
    testimonialTimeline();
  });
  return (
    <section
      id="testimonials"
      className="
        relative
        overflow-hidden
        bg-[#060606]
        py-40
      "
    >
      {/* Background */}

      <div className="absolute inset-0">
        <div
          className="
            testimonials-green-glow
            absolute
            left-[-250px]
            top-20
            h-[700px]
            w-[700px]
            rounded-full
            bg-[#0D7C3E]/10
            blur-[220px]
          "
        />

        <div
          className="
            testimonials-gold-glow
            absolute
            right-[-250px]
            bottom-20
            h-[700px]
            w-[700px]
            rounded-full
            bg-[#D4AF37]/10
            blur-[220px]
          "
        />
      </div>

      <div className="relative z-20 mx-auto max-w-[1500px] px-8">
        <TestimonialsHeading />

        <TestimonialCarousel />
      </div>
    </section>
  );
}
