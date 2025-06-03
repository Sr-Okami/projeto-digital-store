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
    <div className="min-h-screen bg-gray-100 p-8 flex ">
      {" "}
      {/* Layout geral da página */}
      {/* Sidebar de filtros */}
      <div className="flex-shrink-0 g-ap-4 flex m-4 mb-8">
        <aside className="w-[308px] h-[720px] flex-col m-[10px] p-[30px] t-[332px] gap-[20px]">
          {" "}
          {/* w-[308px] para a largura da sidebar, space-y-6 para espaçamento entre os grupos */}
          
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
       {/* Conteúdo principal da página (onde os produtos seriam listados) */}

       <div>
          <h3> <span className="font-bold">Resultados para “Tênis”-</span> 389 produtos</h3> 
       </div>

      <main className="flex-grow ml-8 bg-white p-6 rounded-md shadow-md">
        <section>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Products</h1>
          <p className="text-gray-600">List of products will go here, filtered by the selections.</p>
          {/* Aqui você renderizaria os produtos */}
        </section>

      </main>
    </div>
  );
}

export default App;


