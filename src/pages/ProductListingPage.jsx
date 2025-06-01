import React from "react";
import FilterGroup from "../components/FilterGroup";

const productMarca = [
    
  { text: "Adiddas", value: "adiddas" },
  { text: "Calenciaga", value: "calenciaga" },
  { text: "Nike", value: "nike" },
  { text: "K-Swiss", value: "k-swiss" },
  { text: "Puma", value: "puma" },
];

const productCategories = [
  { text: "Esporte e lazer", value: "esporte-lazer" },
  { text: "Casual", value: "casual" },
  { text: "Utilitário", value: "utilitario" },
  { text: "Corrida", value: "corrida" },
];

const productGenero = [
  { text: "Masculino", value: "masculino" },
  { text: "Feminino", value: "feminino" },
  { text: "Unissex", value: "unissex" },
];
const brandOptions = [
  { text: "Novo", value: "novo" },
  { text: "Usado", value: "usado" },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex "> {/* Layout geral da página */}
      {/* Sidebar de filtros */}
      <aside className="w-[308px] space-y-6 m-8"> {/* w-[308px] para a largura da sidebar, space-y-6 para espaçamento entre os grupos */}
        <FilterGroup
          title="Marca"
          inputType="checkbox" // Usar checkboxes para múltiplas seleções
          options={productMarca}
        />
        
        <FilterGroup
          title="Categoria"
          inputType="checkbox"
          options={productCategories}
        />

        <FilterGroup
          title="Gênero"
          inputType="checkbox"
          options={productGenero}
        />

        <FilterGroup
          title="Estado"
          inputType="radio" // Usar radio buttons para seleção única
          options={brandOptions}
        />
      </aside>
      </div>
      
  );
}


export default App;