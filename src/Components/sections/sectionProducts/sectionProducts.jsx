import "./sectionProducts.css";
import Card from "../../Card/card";
import Button from "../../button/button";

const SectionProducts = () => {
  return (
    <div>
      <section className="products-section fade-up" id="products">
        <h2 className="section-title fade-up">Produtos em destaque</h2>

        <div className="products-grid">
          <Card
            className="product-card fade-up"
            ActionButton={() => (
              <Button className="add-button" text="Comprar" />
            )}
          >
            <div className="product-image">🎧</div>
            <h3 className="product-name">Headset Pro X</h3>
            <p className="product-price">R$ 599,00</p>
          </Card>

          <Card
            className="product-card fade-up"
            ActionButton={() => <Button className="add-button" text="Comprar" />}
          >
            <div className="product-image">🖱️</div>
            <h3 className="product-name">Mouse Gamer Elite</h3>
            <p className="product-price">R$ 499,90</p>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default SectionProducts;
