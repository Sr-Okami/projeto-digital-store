import React, { useState } from "react";
import ProductListing from "../components/ProductListing";
import FilterGroup from "../components/FilterGroup";
import '../styles/ProductListingPage.css'; 
import SortFilterPureCSS from "../components/SortFilterPureCSS";

// Ícone de funil
const FunnelIcon = ({ className = "" }) => (
  <svg className={className} width="28" height="28" fill="none" viewBox="0 0 24 24">
    <path d="M3 5h18M6 10h12M10 15h4" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const ProductListingPage = () => {
  const [currentFilters, setCurrentFilters] = useState({
    brand: [],
    category: [],
    gender: [],
    condition: ''
  });
  const [showFilter, setShowFilter] = useState(false);
  const [sortOrder, setSortOrder] = useState("relevance");

  // Exemplo de quantidade de produtos, troque para o valor real se necessário
  const quantidadeProdutos = 8;

  const handleFilterChange = (filterName, value, isChecked, type) => {
    setCurrentFilters((prev) => {
      if (type === 'checkbox') {
        const arr = prev[filterName];
        return {
          ...prev,
          [filterName]: isChecked
            ? [...arr, value]
            : arr.filter((v) => v !== value)
        };
      } else if (type === 'radio') {
        return {
          ...prev,
          [filterName]: value
        };
      }
      return prev;
    });
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 relative">
      {/* Sidebar de filtros - só aparece em md+ */}
      <aside
        className="
           hidden md:flex
           rounded
           p-6
           flex-col
           gap-5
           w-[308px]
           h-fit
           mr-8
           mt-8
        "
      >
        <FilterGroup
          onFilterChange={handleFilterChange}
          currentFilters={currentFilters}
        />
      </aside>

      {/* Drawer de filtro para mobile */}
      {showFilter && (
        <>
          {/* Fundo translúcido */}
          <div
            className="fixed inset-0 bg-black/30 z-[100]"
            onClick={() => setShowFilter(false)}
          />
          {/* Drawer lateral da esquerda para a direita */}
          <aside
            className="
              fixed top-0 left-0 h-full w-[320px] max-w-full bg-white z-[110]
              flex flex-col
              transition-transform duration-300
              p-6
              rounded-tr-xl rounded-br-xl
              sm:hidden
              shadow-2xl
            "
          >
            <FilterGroup
              onFilterChange={handleFilterChange}
              currentFilters={currentFilters}
              onClose={() => setShowFilter(false)}
            />
            <button
              className="mt-6 w-full bg-pink-600 text-white rounded py-2 font-semibold hover:bg-pink-700 transition-colors"
              onClick={() => setShowFilter(false)}
            >
              Aplicar filtros
            </button>
          </aside>
        </>
      )}

      {/* Conteúdo principal */}
      <main 
        className={`
          flex-1 w-full px-4 py-6 relative
          ${showFilter ? 'sm:relative' : ''}
        `}
      >
        {/* Bloco responsivo de ordenação, filtro e resultado */}
        <div className="mb-6 relative z-10">
          {/* Linha de cima no mobile: select + botão filtro */}
          <div className="flex flex-row justify-between items-center sm:justify-end gap-4">
            <SortFilterPureCSS
              label="Ordenar por"
              options={[
                { text: "mais relevantes", value: "relevance" },
                { text: "menor preço", value: "price_asc" },
                { text: "maior preço", value: "price_desc" },
              ]}
              defaultValue={sortOrder}
              onSelect={setSortOrder}
            />
            {/* Botão filtro só no mobile */}
            <button
              className="sm:hidden flex items-center justify-center w-12 h-12 bg-pink-600 hover:bg-pink-700 rounded-xl transition-colors relative z-20"
              onClick={() => setShowFilter(true)}
              aria-label="Abrir filtros"
              type="button"
            >
              <FunnelIcon />
            </button>
          </div>
          {/* Linha de baixo no mobile: resultado centralizado; no desktop: alinhado à esquerda */}
          <div className="flex justify-center sm:justify-start mt-4">
            <div className="flex items-center">
              <span className="font-bold font-inter text-[14px] leading-[22px] tracking-[0.75px] sm:text-xl sm:leading-6 mr-2">
                Resultados para "Tênis"
              </span>
              <span className="text-gray-500 font-inter text-[14px] leading-[22px] tracking-[0.25px] font-normal sm:text-xl sm:leading-6 sm:tracking-normal sm:font-medium">
                - {quantidadeProdutos} produto{quantidadeProdutos !== 1 ? "s" : ""}
              </span>
            </div>
          </div>
        </div>
        {/* Listagem de produtos */}
        <div className="relative z-10">
          <ProductListing filters={currentFilters} sortOrder={sortOrder} />
        </div>
      </main>
    </div>
  );
};

export default ProductListingPage;