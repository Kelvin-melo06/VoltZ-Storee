import "./sectionFaq.css";

const SectionFaq = () => {
  return (
    <div className="faq-section fade-up" id="faq">
      <h2 class="section-title fade-up">Perguntas Frequentes</h2>
      <div class="faq-item">
        <h3>Quanto tempo leva para entrega?</h3>
        <p>Normalmente entre 3 a 7 dias úteis.</p>
      </div>
      <div class="faq-item">
        <h3>Posso trocar de produto?</h3>
        <p>Sim, dentro de 30 dias após a compra.</p>
      </div>
    </div>
  );
};

export default SectionFaq;
