import "./sectionHero.css";

const SectionHero = () => {
  return (
    <section
      id="hero"
      className="
      hero
      pt-[80px]
      h-[90vh]
      flex
      items-center
      justify-center
      relative
      overflow-hidden
      bg-gradient-to-br
      from-[#0D0D0D]
      to-[#1A1A1A]
    "
    >
      <div className="hero-glow"></div>
      <div
        className="
        mx-w-4xl
        mx-auto
        text-center
        z-10
        fade-up
        px-6
        "
      >
        <h1
          className="
          font-[Orbitron]
          text-[3.5rem]
          font-black
          mb-4
          bg-gradient-to-br
          from-[#F2F2F2]
          to-[#5CE1E6]
          bg-clip-text
          text-transparent
          "
        >
          Bem-vindo à VoltZ Store
        </h1>
        <p
          className="
              text-[1.3rem]
              text-[#5CE1E6]
              mb-10
              font-light
              "
        >
          O melhor da tecnologia em sua mãos⚡
        </p>
        <button className="cta-button">Compre agora</button>
      </div>
    </section>
  );
};

export default SectionHero;
