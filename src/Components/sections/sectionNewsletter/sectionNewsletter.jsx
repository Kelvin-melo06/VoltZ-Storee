import "./sectionNewsletter.css";
import Button from "../../ui/button/button";
import SectionTitle from "../../ui/SectionTitle";

const SectionNewsletter = () => {
  return (
    <section 
    className="
    py-20
    px-[5%]
    text-center
    bg-[#0D0D0D]
    fade-up" 
    id="newsletter"
     >
      <SectionTitle
      >
        Assine nossa Newsletter
      </SectionTitle>
      
      <p className="text-white font-[500]">Receba promoções e novidades direto no seu email ⚡</p>

      <form className="
      mt-8
      flex
      flex-col
      justify-center
      items-center
      gap-4
      flex-wrap
      ">
        <input 
        type="email"
        placeholder="Digite seu email" 
        required
        className="
        p-4
        rounded-full
        border-[3px]
        border-[#1A1A1A]
        bg-[#121212]
        w-[400px]
        mb-[10px]
        h-[60px]
        text-white
        outline-none
        " />
        <Button text="Enviar" type="submit" className="cta-button" />
      </form>
    </section>
  );
};

export default SectionNewsletter;
