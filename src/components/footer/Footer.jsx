import FooterCTA from "./FooterCTA";
import FooterLogo from "./FooterLogo";
import FooterLinks from "./FooterLinks.jsx";
import FooterSocials from "./FooterSocials";

export default function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-white/10
        bg-[#040404]
        pt-32
        pb-12
      "
    >
      {/* Ambient Background */}

      <div className="absolute inset-0">
        <div
          className="
            footer-green-glow
            absolute
            left-[-250px]
            bottom-0
            h-[700px]
            w-[700px]
            rounded-full
            bg-[#0D7C3E]/10
            blur-[220px]
          "
        />

        <div
          className="
            footer-gold-glow
            absolute
            right-[-250px]
            top-0
            h-[700px]
            w-[700px]
            rounded-full
            bg-[#D4AF37]/10
            blur-[220px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-8">
        <FooterCTA />

        <div className="my-24 h-px bg-white/10" />

        <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr_1fr]">
          <FooterLogo />

          <FooterLinks />
        </div>

        <FooterSocials />

        <div className="mt-20 border-t border-white/10 pt-8">
          <p
            className="
              text-center
              text-sm
              tracking-[0.25em]
              text-gray-500
            "
          >
            © 2026 CUE CLUB COVENTRY • CRAFTED WITH PRECISION
          </p>
        </div>
      </div>
    </footer>
  );
}
