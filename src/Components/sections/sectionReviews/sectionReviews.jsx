import "./sectionReviews.css";
import Card from "../../ui/Card/card";
import SectionTitle from "../../ui/SectionTitle";

const SectionReviews = () => {
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
      <SectionTitle>
        O que Dizem nossos clientes:
      </SectionTitle>
      <div
        className="
      grid
      gap-10
      mt-12
      [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]
      "
      >
        <Card
          className="
        reviews-card
        fade-up
        "
        >
          <p>
            <span className="absolute -top-0 -left-2 text-[#00BFFF] text-lg">
              💬
            </span>
            "Adorei o suporte premium, muito prático e resistente."
          </p>
          <span>- Ana, Gamer</span>
        </Card>
        <Card
          className="
        reviews-card 
        fade-up
        "
        >
          <p className="relative pl-5 italic">
            <span className="absolute -top-1 -left-2 text-[#00BFFF] text-lg">
              💬
            </span>
            "Adorei o suporte premium, muito prático e resistente."
          </p>
          <span>- Carlos, Gamer</span>
        </Card>
      </div>
    </section>
  );
};

export default SectionReviews;
