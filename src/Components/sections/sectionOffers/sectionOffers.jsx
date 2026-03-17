import "./sectionOffers.css"
import Card from "@/Components/ui/Card/card.jsx"
import SectionTitle from "@/Components/ui/SectionTitle.jsx"
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { getProducts } from "@/services/products";

const SectionOffers = () => {

  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function loadOffer(){
      const data = await getProducts();

      const offerProduct = data.find(p => p.offer);

      setProduct(offerProduct);
    }

    loadOffer();
  }, []);

  if(!product) return null;

  return (
    <section
      className="
      py-20
      px-[5%]
      bg-[#00BFFF]
      text-center
      fade-up"
      id="offers"
    >

      <SectionTitle>Ofertas Da Semana</SectionTitle>

      <div
        className="
        grid
        gap-10
        mt-12
        [grid-template-columns:repeat(auto-fit, minmax(300px, 1fr))]
        "
      >

        <Card
          className="
          group
          bg-[#1A1A1A]
          rounded-[20px]
          p-8
          transition-all
          duration-300
          border-2
          border-transparent
          relative
          animate-[flutuante_3s_ease-in-out_infinite]
          hover:border-[#00BFFF]
          hover:shadow-[0_10px_40px_rgba(0,191,255,0.4)]
          "
          buttonText="Comprar"
          buttonClasseName="
          w-full 
          py-3
          border-2
          border-[#00BFFF]
          rounded-[10px]
          font-semibold
          text-[#00BFFF]
          transition-all
          duration-300
          hover:bg-[#00BFFF]
          hover:text-[#0D0D0D]
          hover:shadow-[0_0_20px_rgba(0,191,255,0.6)]
          hover:scale-[1.02]
          "
          onButtonClick={() => addToCart(product)}
        >

          <div
          className="
          absolute
          top-4
          right-1
          bg-red-500
          text-white
          text-sm
          font-bold
          px-3
          py-1
          rounded-full
          ">
            -17%
          </div>

          <div
          className="
          w-full
          h-[250px]
          bg-gradient-to-br
          from-[#0D0D0D]
          to-[#1A1A1A]
          rounded-[15px]
          mb-6
          flex
          items-center
          justify-center
          text-[4rem]
          transition-all
          duration-300
          group-hover:scale-105
          group-hover:drop-shadow-[0_0_20px_#00BFFF]
          ">
            {product.img}
          </div>

          <h3
          className="
          font-['Orbitron']
          text-[1.4rem]
          font-semibold
          mb-2
          text-[#F2F2F2]
          ">
            {product.name}
          </h3>

          <p
          className="
          text-[1.4rem]
          font-bold
          text-white
          mb-4
          ">
            R$ {product.price.toFixed(2)}
          </p>

        </Card>

      </div>
    </section>
  );
};

export default SectionOffers;