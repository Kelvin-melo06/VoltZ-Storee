import "./sectionAbout.css";
import { Icon } from "../../ui/icon/Icon.jsx";
import { FaRocket, FaLightbulb, FaShieldAlt } from "react-icons/fa";
import SectionTitle from '../../ui/SectionTitle.jsx'

const SectionAbout = () => {
  return (
    <section className="
    py-[20px]
    px-[5%]
    bg-[#0D0D0D]
    text-center 
    fade-up
    " 
    id="about">
      <SectionTitle>
        Sobre a VoltZ Store
      </SectionTitle>

      <p 
      className="
      text-[20px]
      text-white
      ">
        Criadores de conteúdo e entusiastas de gadgets. Buscamos qualidade,
        inovação e design moderno em cada produto.
      </p>

      <div className="
      flex
      justify-center
      gap-12
      mt-8
      flex-wrap
      animation-[flutuante_3s_ease-in-out_infinite]
      fade-up
      ">
        <div className="icon-box">
          <Icon
            icone={FaRocket}
            size={52}
            color="#00BFFF"
          />
          <p className="text-2xl mt-4">Entrega rápida</p>
        </div>

        <div className="icon-box">
          <Icon
            icone={FaLightbulb}
            size={52}
            color="#FFD700"
          />
          <p className="text-2xl mt-4">Produtos inovadores</p>
        </div>

        <div className="icon-box">
          <Icon
            icone={FaShieldAlt}
            size={52}
            color="#808080"
          />
          <p>Garantia e suporte</p>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
