import CarouselProducts from "../components/CarouselProducts";
import ProductCard from "../components/ProductCard";
import BuyBox from "../components/BuyBox";
import Section from "../components/Section";
import ProductOptions from "../components/ProductOptions";


const ProductViewPage = () => {

  return (
      <main className="px-4 py-12 relative">
        <section>
    <div className="flex flex-col px-4 py-4 bg-gray-100 md:pl-15">
      <div className="w-full mb-4">
        <h3 className="text-xs">
          <strong>Home</strong> / Produtos / Tênis / Nike / Tênis Nike
          Revolution 6 Next Nature Masculino
        </h3>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full pt-3">
          <CarouselProducts />
        </div>
        <section>
            <BuyBox />
            <div>
           <ProductOptions />
          </div>
          </section>      
        </div>    
      <div className="mt-20">
                    <Section
                        title="Produtos Relacionados"
                        titleAlign="center"
                        link={{  text: "Ver tudo →", href: "/produtos" }}>
           
        <div className="mt-10">   
          <ProductCard />
        </div>
    </Section>
      
      </div>
      
      </div>
    </section>
    </main>
  );
};

export default ProductViewPage;

