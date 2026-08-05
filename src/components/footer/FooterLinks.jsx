import footerLinks from "./footerLinks.js";

export default function FooterLinks() {
  return (
    <>
      {footerLinks.map((section) => (
        <div key={section.title}>
          <h3
            className="
              mb-8
              text-lg
              font-semibold
              text-white
            "
          >
            {section.title}
          </h3>

          <ul className="space-y-5">
            {section.links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="
                    text-gray-400
                    transition
                    hover:text-[#D4AF37]
                  "
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
