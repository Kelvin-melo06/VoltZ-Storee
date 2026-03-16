import "./sectionReviews.css";
import Card from "../../ui/Card/card";

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
      <h2
        className="
        font-['Orbitron']
        text-3xl
        md:text-4xl
        text-center
        mb-12
        text-[#F2F2F2]
        fade-up
      "
      >
        O que Dizem nossos clientes:
      </h2>
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
        reviews-card fade-up
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
