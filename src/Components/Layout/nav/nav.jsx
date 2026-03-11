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
        fixed top-[72px] left-0 h-[calc(100%-72px)] w-64 bg-[#0d0d0d] z-50 transform transition-transform duration-300 ease-in-out
        ${menu ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:relative md:h-auto md:w-auto md:flex
        shadow-md
      `}
    >
      <ul className="flex flex-col md:flex-row gap-4 p-8 md:p-0 bg-[#0d0d0d]">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="
                text-white font-medium relative
                after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] 
                after:bg-[#00BFFF] after:drop-shadow-[0_0_8px_#00BFFF] 
                after:transition-all after:duration-300 hover:after:w-full
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