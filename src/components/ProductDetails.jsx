import React from "react";

const ProductDetails = ({ produto }) => {
    if (!produto) {
        return <div>Carregando...</div>;
    }

    return (
        <div>
            <p className="
            text-xs
            text-gray-700
            md:text-base
            w-full
            md:w-[80%]"
            >
                {produto.descricao}
            </p>
        </div>
    );
};
export default ProductDetails;