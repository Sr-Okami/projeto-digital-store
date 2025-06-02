import React from "react";
import "./Produtos.json";

//Essa .Json é onde fica as informações para serem renderizadas no card de produto,
//ela está no diretório src/components
//Aqui fica o card de produto mas ainda não sei como fazer a repetição deles para cada produto
//Pq são 8 da pagina inicial e nas outras paginas +8 produtos :/
const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.imagem} alt={product.Nome} />
            <span>{product.Categoria}</span>
            <h3>{product.Nome}</h3>
            <div>
                <span>{product.PrecoDesconto}</span>
                <span>{product.Preco}</span>
            </div>
        </div>
    );
};

export default ProductCard;

