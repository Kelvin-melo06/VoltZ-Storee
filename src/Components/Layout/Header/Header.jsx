/**
 * Header.jsx
 * ----------------------------------------
 * Componente responsável pelo topo da aplicação.
 *
 * Ele centraliza funcionalidades importantes como:
 * - Navegação (menu)
 * - Acesso ao carrinho
 * - Controle de modal
 * - Menu mobile (hambúrguer)
 * - Comportamento visual baseado no scroll
 */

import { Icon } from "@/Components/ui/icon/Icon.jsx";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import Nav from "@/Components/Layout/nav/nav.jsx";
import { CartContext } from "@/context/CartContext.jsx";
import { ModalContext } from "@/context/ModalContext.jsx";
import { useContext, useState, useEffect } from "react";

const Header = () => {

  /**
   * Context API:
   * ------------
   * Acessa estados globais da aplicação sem necessidade de prop drilling.
   */
  const { cart } = useContext(CartContext);
  const { toggleModal } = useContext(ModalContext);

  /**
   * cartCount:
   * ----------
   * Calcula a quantidade total de itens no carrinho.
   */
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  /**
   * Estados locais:
   */
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /**
   * Scroll listener
   */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 w-full z-50 backdrop-blur-md
        border-b border-[rgba(0,191,255,0.1)]
        transition-all duration-300
        ${scrolled ? "py-3 bg-black/95" : "py-5 bg-[#0d0d0d]/95"}
      `}
    >
      <div className="flex items-center justify-between px-[5%]">

        {/* LOGO */}
        <h1 className="flex items-center gap-2 text-2xl font-black text-white">
          Voltz
          <span className="text-[#00BFFF] drop-shadow-[0_0_10px_#00BFFF]">
            ⚡
          </span>
        </h1>

        {/* NAV */}
        <Nav menu={menuOpen} />

        {/* ICONS */}
        <div className="flex items-center gap-6">

          {/* CARRINHO */}
          <div className="relative cursor-pointer">
            <Icon
              icone={FaShoppingCart}
              size={24}
              color="#00BFFF"
              onClick={toggleModal}
            />

            {/* Exibe quantidade apenas se houver itens */}
            {cartCount > 0 && (
              <span className="absolute -top-3 -right-4 bg-[#00BFFF]/20 text-xs font-bold px-2 py-[2px] rounded-full">
                {cartCount}
              </span>
            )}
          </div>

          {/* MENU HAMBÚRGUER */}
          <button
            className="hidden max-[878px]:block"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon
              icone={menuOpen ? FaTimes : FaBars}
              size={24}
              color="#00BFFF"
            />
          </button>
        </div>
      </div>

      {/* OVERLAY MOBILE */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 max-[878px]:block min-[878px]:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;