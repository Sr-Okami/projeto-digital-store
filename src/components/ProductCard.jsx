import React from "react";
import "./Produtos.json";
//Essa .Json é onde fica as informações para serem renderizadas no card de produto,
//ela está no diretório src/components
//Aqui fica o card de produto mas ainda não sei como fazer a repetição deles para cada produto
//Pq são 8 da pagina inicial e nas outras paginas +8 produtos :/
//const ProductCard = ({ product }) => {
//    return (
//        <div className="product-card">
//            <img src={product.imagem} alt={product.Nome} />
//            <span>{product.Categoria}</span>
//            <h3>{product.Nome}</h3>
//            <div>
//                <span>{product.PrecoDesconto}</span>
//                <span>{product.Preco}</span>
//            </div>
//        </div>
//    );
//};

//export default ProductCard;
import { Link } from "react-router-dom";

const ProductCard = ({ className, title, containerClass, imageClass, textClass, h2Class, priceClass  }) => {
  return (
    <div className="relative w-full bg-white p-4 rounded-lg shadow">
       <Link to="/produtos/:id" >
      
       
      {title && (
        <span className="absolute top-3 left-2 bg-[#e7ff86] rounded-lg w-[80px] h-[32px] flex items-center justify-center text-xs font-medium">
          {title}
        </span>
      )}

      <div className={`w-full max-w-[280px] aspect-square flex items-center justify-center mx-auto flex-col ${className} ${containerClass}`}>
        <img 
          src="..\public\assets\produto2.png"
          alt="Tênis"
          className={`rotate-320 max-w-[60%] max-h-[60%] transition-transform duration-300 ease-in-out transform hover:scale-105 object-contain mx-auto cursor-pointer ${imageClass}`}
        />
      </div>

      <div className="w-full max-w-[300px] mx-auto flex flex-col gap-1 mt-4 mb-5">
        <p className={`text-gray-500 text-xs ${textClass}`}>Tênis</p>
        <h2 className={`text-gray-800 ${h2Class}`} >K-Swiss V8 - Masculino</h2>
        <div className="gap-2">
          <span className={`text-sm text-gray-400 line-through ${priceClass}`}>$200</span>
          <span className={`text-base font-bold pl-3 ${priceClass} `}>$ 100</span>
        </div>
      </div>
       </Link>
    </div>
  );
};

export default ProductCard;

