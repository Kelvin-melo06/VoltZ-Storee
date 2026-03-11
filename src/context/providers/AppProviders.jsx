import  CartProvider  from "../CartContext"
import  ModalProvider  from "../ModalContext"

const AppProviders = ({children}) => {
  return (
    
    <CartProvider>
        <ModalProvider>
            {children}
        </ModalProvider>
    </CartProvider>
  )
}

<<<<<<< HEAD
export default AppProviders;
=======
export default AppProviders
>>>>>>> e9ac67957cc446aaabe560e5c93fb80c3992e408
