/**
 * HomeSections.jsx
 * ----------------------------------------
 * Componente responsável por reunir todas as seções
 * da página inicial da aplicação.
 *
 * Ele funciona como o "container principal" do conteúdo,
 * organizando a estrutura visual do site.
 */

import SectionHero from "@/Components/sections/sectionHero/sectionHero";
import SectionProducts from "@/Components/sections/sectionProducts/sectionProducts";
import SectionReviews from "@/Components/sections/sectionReviews/sectionReviews";
import SectionOffers from "@/Components/sections/sectionOffers/sectionOffers";
import SectionNewsletter from "@/Components/sections/sectionNewsletter/sectionNewsletter";
import SectionAbout from "@/Components/sections/sectionAbout/sectionAbout";
import SectionFaq from "@/Components/sections/sectionFaq/sectionFaq";

const HomeSections = () => {
  return (
    <main className="pt-[80px]">

      {/**
       * main:
       * -----
       * Tag semântica que representa o conteúdo principal da página.
       */}

      {/**
       * padding-top:
       * ------------
       * Adicionado para compensar o Header fixo.
       *
       * Como o Header utiliza position: fixed,
       * o conteúdo poderia ficar escondido atrás dele.
       *
       * Esse espaçamento garante que as seções comecem
       * visíveis corretamente na tela.
       */}

      {/**
       * Seções da aplicação:
       * --------------------
       * Cada componente representa uma parte do site:
       *
       * - SectionHero        -> seção inicial (destaque)
       * - SectionProducts    -> produtos em destaque
       * - SectionReviews     -> depoimentos de clientes
       * - SectionOffers      -> ofertas/promos
       * - SectionNewsletter  -> captura de e-mail
       * - SectionAbout       -> informações sobre a marca
       * - SectionFaq         -> perguntas frequentes
       *
       * Cada uma será documentada separadamente
       * em seus respectivos arquivos.
       */}

      <SectionHero />
      <SectionProducts />
      <SectionReviews />
      <SectionOffers />
      <SectionNewsletter />
      <SectionAbout />
      <SectionFaq />

      {/**
       * Alias (@):
       * ----------
       * Utilizado para evitar caminhos relativos longos.
       *
       * Exemplo:
       * "../../../Components/..."
       *
       * Com alias:
       * "@/Components/..."
       *
       * Isso melhora:
       * - Legibilidade
       * - Manutenção
       * - Organização do projeto
       */}
      
    </main>
  );
};

export default HomeSections;