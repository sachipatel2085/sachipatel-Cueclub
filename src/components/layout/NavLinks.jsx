import navigation from "../../data/navigation";

export default function NavLinks() {
  return (
    <ul className="hidden lg:flex items-center gap-10">
      {navigation.map((item) => (
        <li key={item.title}>
          <a
            href={item.href}
            className="
              relative
              text-sm
              uppercase
              tracking-widest
              text-gray-300
              transition
              duration-300
              hover:text-white
              after:absolute
              after:left-0
              after:-bottom-2
              after:h-px
              after:w-0
              after:bg-yellow-400
              after:transition-all
              after:duration-300
              hover:after:w-full
            "
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
