/**
 * Card.jsx
 * ----------------------------------------
 * Componente genérico e reutilizável de card.
 *
 * Ele NÃO possui lógica própria de negócio.
 * Sua única responsabilidade é estruturar e aplicar estilo
 * com base nas props recebidas.
 *
 * Pode ser utilizado em diferentes contextos da aplicação
 * (produtos, reviews, ofertas, etc).
 */

import Button from "@/Components/ui/button/Button.jsx";

const Card = ({
  children,
  className,
  buttonText,
  onButtonClick,
  buttonClasseName,
}) => {
  return (
    <>

      {/*
        Container do Card:
        ------------------
        - Possui uma classe base "card"
        - Pode receber estilos adicionais via props (className)
      */}
      <div
        className={`card
        ${className || ""}`}
      >

        {/*
          children:
          ---------
          Representa o conteúdo interno do card.
          Pode ser qualquer coisa (texto, imagem, JSX, etc),
          tornando o componente totalmente dinâmico.
        */}
        {children}

        {/*
          Renderização condicional do botão:
          ----------------------------------
          - O botão só é renderizado se "buttonText" existir
          - Isso permite usar o Card com ou sem botão
        */}
        {buttonText && (
          <Button

            /*
              Estilização do botão:
              ---------------------
              Recebida via props e repassada diretamente
              para o componente Button
            */
            className={buttonClasseName}

            /*
              Texto do botão:
              ----------------
              Define o conteúdo exibido no botão
            */
            text={buttonText}

            /*
              Comportamento do botão:
              -----------------------
              Função executada ao clicar no botão
              (ex: adicionar ao carrinho)
            */
            onClick={onButtonClick}
          />
        )}
      </div>
    </>
  );
};

export default Card;