/**
 * AppProviders.jsx
 * ----------------------------------------
 * Componente responsável por agrupar todos os Providers globais da aplicação.
 *
 * Sua principal função é envolver toda a aplicação (App) com os contextos
 * necessários, permitindo o compartilhamento de estado entre os componentes
 * sem a necessidade de prop drilling.
 */

import CartProvider from "@/context/CartContext.jsx";
import ModalProvider from "@/context/ModalContext.jsx";

const AppProviders = ({ children }) => {
  return (

    /**
     * CartProvider:
     * -------------
     * Responsável por disponibilizar o estado e as funções relacionadas
     * ao carrinho para toda a aplicação.
     */

    <CartProvider>

      /**
       * ModalProvider:
       * --------------
       * Responsável por controlar o estado do modal (aberto/fechado)
       * e disponibilizar essas informações globalmente.
       */

      <ModalProvider>

        /**
         * children:
         * ---------
         * Representa tudo que está dentro do AppProviders,
         * que no caso é o componente App.
         *
         * Ao envolver o App com os Providers, garantimos que qualquer
         * componente da aplicação possa acessar os estados globais
         * (como carrinho e modal) diretamente via Context API.
         */
        {children}

      </ModalProvider>
    </CartProvider>
  );
};

export default AppProviders;