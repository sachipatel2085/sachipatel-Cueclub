import Logo from "./Logo";
import NavLinks from "./NavLinks";
import useNavbar from "../../hooks/useNavbar";
import { useState } from "react";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const scrolled = useNavbar();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header
        className={`
        fixed
        top-0
        left-0
        z-50
        w-full
        transition-all
        duration-500
        

        ${
          scrolled
            ? "backdrop-blur-xl bg-white/5 border-b border-white/10 py-3"
            : "bg-transparent py-6"
        }
      `}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-8 ">
          <Logo />
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
            className="lg:hidden text-white"
          >
            <Menu size={30} />
          </button>
          <NavLinks />

          <button
            className="
hidden
lg:flex
items-center
justify-center
rounded-full
bg-linear-to-r
from-yellow-500
to-yellow-400
px-7
py-3
font-semibold
text-black
transition-all
duration-500
hover:scale-105
hover:shadow-[0_0_40px_rgba(212,175,55,.45)]
"
          >
            Book Table
          </button>
        </div>
      </header>
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
