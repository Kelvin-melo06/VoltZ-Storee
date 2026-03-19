/**
 * SectionReviews.jsx
 * ----------------------------------------
 * Componente responsável por exibir a seção de depoimentos (reviews) do site.
 *
 * Diferente de outras seções, os dados aqui são estáticos,
 * ou seja, não vêm de uma API, mas sim de uma array local.
 */

import "./sectionReviews.css";
import Card from "../../ui/Card/card";
import SectionTitle from "../../ui/SectionTitle";

const SectionReviews = () => {

  /**
   * reviews:
   * --------
   * Array de dados contendo os depoimentos dos clientes.
   */
  const reviews = [
    {
      id: 1,
      img: "💬",
      p: " Adorei o suporte premium, muito prático e resistente. ",
      pessoa: "- Ana, Gamer",
    },
    {
      id: 2,
      img: "💬",
      p: "O Headset Pro X mudou totalmente minha experiência de jogo!”",
      pessoa: "- Laura, Gamer",
    },
  ];

  return (
    <section
      id="reviews"
      className="
        py-20
        px-[5%]
        bg-[#0D0D0D]
        fade-up
      "
    >

      {/* SectionTitle: título da seção */}
      <SectionTitle>
        O que dizem nossos clientes:
      </SectionTitle>

      <div className="
        grid
        gap-10
        mt-12
        [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]
      ">

        {/* Renderização dos reviews */}
        {reviews.map((rev) => (

          <Card
            key={rev.id}
            className="
              reviews-card
              fade-up
              w-full
              md:max-w-[600px]
              mx-auto
            "
          >

            {/* Conteúdo do review */}
            <p>
              <span>{rev.img}</span> {rev.p} {rev.pessoa}
            </p>

          </Card>
        ))}
      </div>
    </section>
  );
};

export default SectionReviews;