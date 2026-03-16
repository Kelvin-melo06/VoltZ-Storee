import CartProvider from "@/context/CartContext.jsx";
import ModalProvider from "@/context/ModalContext.jsx";

const AppProviders = ({children}) => {
  return (
    
    <CartProvider>
        <ModalProvider>
            {children}
        </ModalProvider>
    </CartProvider>
  )
}

export default AppProviders;
