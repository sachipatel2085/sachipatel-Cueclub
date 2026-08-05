import { Quote } from "lucide-react";

export default function FooterSocials() {
  return (
    <div
      className="
        mt-20
        flex
        justify-center
        gap-5
      "
    >
      {[Quote, Quote, Quote].map((Icon, index) => (
        <button
          key={index}
          className="
            group
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/[0.04]
            backdrop-blur-xl
            transition-all
            duration-500
            hover:-translate-y-1
            hover:border-[#D4AF37]/40
            hover:shadow-[0_0_30px_rgba(212,175,55,.25)]
          "
        >
          <Icon
            size={22}
            className="
              text-gray-300
              transition-colors
              duration-300
              group-hover:text-[#D4AF37]
            "
          />
        </button>
      ))}
    </div>
  );
}
