import React from "react";
import produtos from "./Produtos.json";
import { Link } from "react-router-dom";

const ProductCard = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
    {produtos.slice(0, 8).map((produto) => (
        <div key={produto.id} className="border-none rounded-lg p-4 shadow group">
          <Link to={`/produtos/${produto.id}`} className="block mb-2">
          <img
            src={produto.imagem.replace(/^public\//, "/")}
            alt={produto.Nome}
            className="w-full h-32 object-cover mb-2 transition duration-300 group-hover:scale-130"
          />
          <h3 className="font-bold text-sm group-hover:text-primary">{produto.Nome}</h3>
          <p className="text-xs text-gray-500">{produto.Categoria}</p>
          <div className="flex gap-2 items-center mt-2">
            <span className="line-through text-gray-400 text-xs">
              R$ {produto.Preco.toFixed(2)}
            </span>
            <span className="text-black font-bold text-sm transition duration-300 group-hover:rotate-12 group-hover:scale-160 group-hover:animate-wiggle group-hover:text-green-500">
              R$ {produto.PrecoDesconto.toFixed(2)}
            </span>
          </div>
          </Link>
        </div>

    ))}
  </div>
);

export default ProductCard;