import IconsStar from "../components/IconsStar";
import IconStarSimple from "../components/IconStarSimple";

const BuyBox = () => {
  
 
  return (
    <>
    <div className="w-full md:w-2/3 p-4 justify-start">
          <h2 className="text-lg font-semibold mb-2">
            Tênis Nike Revolution <br className="hidden md:block" /> 6 Next Nature Masculino
          </h2>
          <h3 className="text-xs text-gray-600">
            Casual / Nike / REF:38416711
          </h3>

          <div className="flex flex-wrap md:flex-nowrap justify-start items-center pt-2 pb-2 gap-1">
            <div className="flex">
              <IconsStar className="text-[#f6aa1c]" />
              <IconsStar className="text-[#f6aa1c]" />
              <IconsStar className="text-[#f6aa1c]" />
              <IconsStar className="text-[#f6aa1c]" />
              <IconStarSimple className="text-[#f6aa1c]" />
            </div>
            <div className="bg-[#f6aa1c] w-[70px] h-[25px] rounded-sm flex items-center justify-center gap-1">
              <h3 className="text-white text-sm">4.7</h3>
              <IconsStar className="text-white size-4" />
            </div>
            <p className="text-xs text-gray-400">(90 avaliações)</p>
          </div>

          <div className="flex items-baseline gap-2">
            <h2 className="text-xl font-bold">
              <span className="text-sm pr-1">R$</span>
              219,00
            </h2>
            <span className="text-gray-400 line-through text-sm">219,00</span>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-gray-600 pt-3 pb-2">
              Descrição do produto
            </h2>
            <p className="text-xs text-gray-700 md:text-base w-full md:w-[98%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dicta quod maiores tempore suscipit excepturi. Libero laboriosam illo non minus, quo deleniti quod autem, fuga nobis, quae nostrum nemo sapiente.
            </p>
          </div>

          
            </div>
            
            
    </>
  );
}
 
export default BuyBox;