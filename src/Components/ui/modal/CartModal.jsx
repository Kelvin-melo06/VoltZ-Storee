import "./CartModal.css";
import Button from "../button/button";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";
import { ModalContext } from "../../../context/ModalContext";
import { useEffect } from "react";

const CartModal = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const { closeModal, isModalOpen } = useContext(ModalContext);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleEsc);

    return () => window.removeEventListener("keydown", handleEsc);
  }, [closeModal]);

  if (!isModalOpen) return null;


  const cartTotal = cart
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div
      onClick={closeModal}
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="cart-neon"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h2
          className="
        text-3xl text-center font-bold mb-8
        bg-gradient-to-r from-white to-cyan-300
        bg-clip-text text-transparent
        "
        >
          Carrinho 🛒
        </h2>
        {cart.length > 0 ? (
          <ul
            className="
          list-none
          mb-6
          max-h-[300px]
          overflow-y-auto
          pr-2
          "
          >
            {cart.map((item) => (
              <li
                key={item.id}
                className="
              flex items-center justify-between
              gap-4
              p-4 mb-4
              rounded-xl
              text-white
              font-bold
              border border-cyan-400/20
              bg-cyan-400/5
              transition-all duration-300
              hover:bg-cyan-400/10
              hover:border-cyan-400
              hover:translate-x-[5px]
              "
              >
                <div
                  className="
                flex
                flex-col
                text-left
                "
                >
                  <span>{item.name}</span>- 
                  <span
                    className="
                  text-cyan-300 text-sm
                  "
                  >
                    R${item.price.toFixed(2)}
                    {item.quantity > 1 && ` x${item.quantity}`}
                  </span>
                </div>
                <Button
                  text="🗑"
                  onClick={() => removeFromCart(item.id)}
                  className="
                  btn-danger
                  "
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className="cart-empty">O Carrinho está Vazio 😔</p>
        )}
        <p
          className="
        text-xl
        text-center
        mb-6
        p-4
        bg-cyan-400/10
        border border-cyan-400/20
        rounded-xl
        sticky bottom-0
        "
        >
          <strong className="text-cyan-300 text-2xl font-bold">
            Total: {cartTotal}
          </strong>
        </p>
        <Button
          text="Fechar"
          onClick={closeModal}
          className="
        btn-primary
        "
        />
      </div>
    </div>
  );
};

export default CartModal;
