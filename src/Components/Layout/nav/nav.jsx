const Nav = ({ menu }) => {
  const links = [
    { label: "Home", href: "#hero" },
    { label: "Products", href: "#products" },
    { label: "Depoimentos", href: "#reviews" },
    { label: "Ofertas", href: "#offers" },
    { label: "Newsletter", href: "#newsletter" },
    { label: "Sobre", href: "#sobre" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`
        fixed top-[72px] left-0 h-[calc(100%-72px)] w-64 bg-[#0d0d0d]
        transform transition-transform duration-300 ease-in-out z-50
        ${menu ? "translate-x-0" : "-translate-x-full"}

        min-[878px]:static
        min-[878px]:h-auto
        min-[878px]:w-auto
        min-[878px]:translate-x-0
        min-[878px]:bg-transparent
      `}
    >
      <ul
        className="
          flex flex-col gap-6 p-8
          min-[878px]:flex-row
          min-[878px]:items-center
          min-[878px]:p-0
        "
      >
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="
                text-white font-medium relative
                after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px]
                after:bg-[#00BFFF] after:transition-all after:duration-300
                hover:after:w-full
              "
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;