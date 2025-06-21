import React from 'react';
import FilterGroup from './FilterGroup'; // Certifique-se de que o caminho está correto

// Ícone de fechar (SVG)
const CloseIcon = ({ className = "" }) => (
  <svg className={className} width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

/**
 * Componente de Modal/Drawer para Filtros.
 * Exibe o FilterGroup dentro de um overlay responsivo para telas menores.
 *
 * @param {object} props - As propriedades do componente.
 * @param {boolean} props.isOpen - Se o modal está visível.
 * @param {function(): void} props.onClose - Função para fechar o modal.
 * @param {function(string, string, boolean, string): void} props.onFilterChange - Callback para mudanças de filtro.
 * @param {object} props.currentFilters - Filtros atualmente selecionados.
 * @param {function(): void} props.onClearFilters - Função para limpar os filtros.
 */
const FilterModal = ({ isOpen, onClose, onFilterChange, currentFilters, onClearFilters }) => {
  if (!isOpen) return null; // Não renderiza nada se o modal não estiver aberto

  return (
    // Overlay de fundo que escurece a tela e fecha ao clicar fora
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" // Visível apenas em telas pequenas, z-index alto
      onClick={onClose} // Fecha ao clicar no overlay
    >
      {/* Container do Modal/Drawer */}
      <div
        className="fixed top-0 right-0 h-full w-4/5 sm:w-1/2 bg-white p-6 shadow-lg z-50 flex flex-col transform transition-transform duration-300 ease-in-out"
        // Impede que o clique dentro do modal feche o modal
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabeçalho do Modal: Título e botão Fechar */}
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <h2 className="text-xl font-bold text-gray-800">Filtrar por</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Botão Limpar Filtros dentro do modal */}
        <div className="flex justify-end mb-4">
          <button
            onClick={onClearFilters}
            className="text-sm text-blue-600 hover:text-blue-800 underline"
          >
            Limpar filtros
          </button>
        </div>

        {/* Conteúdo dos Filtros */}
        <div className="flex-grow overflow-y-auto"> {/* Adiciona scroll se os filtros forem muitos */}
          <FilterGroup
            onFilterChange={onFilterChange}
            currentFilters={currentFilters}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterModal;