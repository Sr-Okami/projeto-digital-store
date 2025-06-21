import React, { useEffect, useRef } from "react";

const marcas = ["Adiddas", "Calenciaga", "K-Swiss", "Nike", "Puma"];
const categorias = ["Esporte e lazer", "Casual", "Utilitário", "Corrida"];
const generos = ["Masculino", "Feminino", "Unisex"];
const estados = ["Novo", "Usado"];

const FilterGroup = ({ onFilterChange, currentFilters, onClose }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      if (containerRef.current) {
        e.preventDefault();
        containerRef.current.scrollTop += e.deltaY;
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      return () => {
        container.removeEventListener('wheel', handleWheel);
      };
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      className="flex flex-col p-4 rounded shadow-md w-full sm:w-[300px] bg-[#FFFFFF] max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
    >
      {/* Título e botão X (só no mobile) */}
      <div className="flex justify-between items-center mb-4 sticky top-0 bg-white z-10">
        <span className="font-bold text-[16px] leading-6 tracking-[0.75px] font-inter">
          Filtrar por
        </span>
        <button
          className="sm:hidden text-2xl font-bold text-gray-500 hover:text-pink-700"
          onClick={onClose}
          aria-label="Fechar filtros"
        >
          ×
        </button>
      </div>
      <hr className="mb-4 w-[248px] border-t border-[#CCCCCC]" />
      
      {/* Marca */}
      <div className="flex flex-col w-[120px] h-[182px] gap-[10px] mb-[50px]">
        <div className="font-bold mb-2">Marca</div>
        {marcas.map((marca) => (
          <label key={marca} className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={currentFilters.brand.includes(marca)}
              onChange={(e) =>
                onFilterChange("brand", marca, e.target.checked, "checkbox")
              }
              className="accent-pink-600 mr-2 w-[22px] h-[22px]"
            />
            {marca}
          </label>
        ))}
      </div>
      
      {/* Categoria */}
      <div className="flex flex-col w-[180px] h-[150px] gap-[10px] mb-[50px]">
        <div className="font-bold mb-2">Categoria</div>
        {categorias.map((cat) => (
          <label key={cat} className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={currentFilters.category.includes(cat)}
              onChange={(e) =>
                onFilterChange("category", cat, e.target.checked, "checkbox")
              }
              className="accent-pink-600 mr-2 w-[22px] h-[22px]"
            />
            {cat}
          </label>
        ))}
      </div>
      
      {/* Gênero */}
      <div className="flex flex-col w-[103px] h-[118px] gap-[10px] mb-[50px]">
        <div className="font-bold mb-2">Gênero</div>
        {generos.map((gen) => (
          <label key={gen} className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={currentFilters.gender.includes(gen)}
              onChange={(e) =>
                onFilterChange("gender", gen, e.target.checked, "checkbox")
              }
              className="accent-pink-600 mr-2 w-[22px] h-[22px]"
            />
            {gen}
          </label>
        ))}
      </div>
      
      {/* Estado */}
      <div className="flex flex-col w-[90px] h-[100px] gap-[10px] mb-[50px]">
        <div className="font-bold mb-2">Estado</div>
        {estados.map((estado) => (
          <label key={estado} className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="estado"
              checked={currentFilters.condition === estado}
              onChange={(e) =>
                onFilterChange("condition", estado, e.target.checked, "radio")
              }
              className="accent-pink-600 mr-2 w-[22px] h-[22px]"
            />
            {estado}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterGroup;