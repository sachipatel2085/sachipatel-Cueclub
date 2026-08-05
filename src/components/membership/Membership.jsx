import MembershipHeading from "./MembershipHeading";
import MembershipGrid from "./MembershipGrid";
import { useGSAP } from "@gsap/react";

import membershipTimeline from "../../animations/membershipTimeline";

export default function Membership() {
  useGSAP(() => {
    membershipTimeline();
  });
  return (
    <section
      id="membership"
      className="
        relative
        overflow-hidden
        bg-[#050505]
        py-44
      "
    >
      {/* Background */}

      <div className="absolute inset-0">
        <div
          className="
            membership-green-glow
            absolute
            left-[-250px]
            top-0
            h-[700px]
            w-[700px]
            rounded-full
            bg-[#0D7C3E]/10
            blur-[250px]
          "
        />

        <div
          className="
            membership-gold-glow
            absolute
            right-[-250px]
            bottom-0
            h-[700px]
            w-[700px]
            rounded-full
            bg-[#D4AF37]/10
            blur-[250px]
          "
        />

        {/* Luxury grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.03]
            [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)]
            [background-size:60px_60px]
          "
        />
      </div>

      <div className="relative z-20 mx-auto max-w-[1500px] px-8">
        <MembershipHeading />

        <MembershipGrid />
      </div>
    </section>
  );
}
