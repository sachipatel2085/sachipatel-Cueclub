import ContactHeading from "./ContactHeading";
import BookingForm from "./BookingForm";
import ContactInfo from "./ContactInfo";
import OpeningHours from "./OpeningHours";
import ContactMap from "./ContactMap";
import { useGSAP } from "@gsap/react";
import contactTimeline from "../../animations/contactTimeline";

export default function Contact() {
  useGSAP(() => {
    contactTimeline();
  });
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050505] py-40"
    >
      {/* Background */}

      <div className="absolute inset-0">
        <div
          className="
            contact-green-glow
            absolute
            left-[-250px]
            top-0
            h-[700px]
            w-[700px]
            rounded-full
            bg-[#0D7C3E]/10
            blur-[220px]
          "
        />

        <div
          className="
            contact-gold-glow
            absolute
            right-[-250px]
            bottom-0
            h-[700px]
            w-[700px]
            rounded-full
            bg-[#D4AF37]/10
            blur-[220px]
          "
        />
      </div>

      <div className="relative z-20 mx-auto max-w-[1500px] px-8">
        <ContactHeading />

        <div className="mt-24 grid gap-12 lg:grid-cols-[1.1fr_.9fr]">
          <BookingForm />

          <div className="space-y-10">
            <ContactInfo />

            <OpeningHours />

            <ContactMap />
          </div>
        </div>
      </div>
    </section>
  );
}
