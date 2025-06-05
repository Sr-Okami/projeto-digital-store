const FilterGroup= () => {
  return (
    <>
      <section>
       <aside>
        {/* Título do painel de filtros */}
        {/* m-[30px] -> Margem de 30px em todas as direções. Considere usar px-8 py-6 para padding interno e mt-8 para margem externa */}
        <h2 class="w-[700px] h-[24px] m-[30px] text-[16px] leading-[24px] tracking-[0.75px] dark-gray-2 font-[Text Small Bold]">Filtrar por</h2>
        <hr class="w-[248px] borde" />

        {/* Seção de filtro de Marca */}
        <div className="mb-6"> {/* Adiciona margem inferior para separar as seções de filtro */}
          {/* Label do grupo de filtros "Marca" */}
          {/* m-[30px] -> Margem de 30px, melhor usar padding no contêiner ou p-x */}
          {/* font-bold -> Negrito */}
          <label className="m-[30px] font-bold block mb-4" htmlFor=""> {/* Adicionado 'block' e 'mb-4' para espaçamento e quebra de linha */}
            Marca
          </label>
          
          {/* Contêiner para os inputs de marca.
              flex flex-col -> organiza os itens em uma coluna.
              space-y-2 -> adiciona um espaçamento vertical de 8px entre os itens filhos diretos.
              ml-[30px] -> margem à esquerda para alinhar com o título.
          */}
          <div className="flex flex-col space-y-2 ml-[30px]">
            {/* Opção de filtro individual: Adidas */}
            {/* label -> É o elemento correto para envolver um input e seu texto, tornando toda a área clicável.
                flex -> Transforma o label em um contêiner flexível.
                items-center -> Alinha o input e o texto verticalmente ao centro.
                cursor-pointer -> Indica que o elemento é clicável ao passar o mouse.
            */}
            <label className="flex items-center cursor-pointer">
              {/* input -> O checkbox.
                  mr-2 -> Adiciona uma margem de 8px (2 * 4px) à direita do input, separando-o do texto.
                  h-4 w-4 -> Define altura e largura para o checkbox (4 = 16px, padrão Tailwind para inputs)
                  accent-blue-500 -> (Opcional) Define a cor de destaque do checkbox quando marcado.
                  form-checkbox -> (Opcional, se você tiver @tailwindcss/forms plugin) Estiliza o checkbox.
              */}
              <input
                className="mr-2 h-4 w-4 accent-blue-500" // Classes Tailwind para posicionamento e tamanho do input
                type="checkbox"
                name="marca" // Todos os checkboxes de 'Marca' devem ter o mesmo 'name' para agrupamento lógico
                value="adidas"
              />{" "}
              Adidas
            </label>
          
            {/* Opção de filtro individual: Calenciaga */}
            <label className="flex items-center cursor-pointer">
              <input
                className="mr-2 h-4 w-4 accent-blue-500"
                type="checkbox"
                name="marca"
                value="calenciaga"
              />{" "}
              Calenciaga
            </label>
          
            {/* Opção de filtro individual: K-Swiss */}
            <label className="flex items-center cursor-pointer">
              <input
                className="mr-2 h-4 w-4 accent-blue-500"
                type="checkbox"
                name="marca"
                value="kswiss"
              />{" "}
              K-Swiss
            </label>
          
            {/* Opção de filtro individual: Nike */}
            <label className="flex items-center cursor-pointer">
              <input
                className="mr-2 h-4 w-4 accent-blue-500"
                type="checkbox"
                name="marca"
                value="nike"
              />{" "}
              Nike
            </label>
          
            {/* Opção de filtro individual: Puma */}
            <label className="flex items-center cursor-pointer">
              <input
                className="mr-2 h-4 w-4 accent-blue-500"
                type="checkbox"
                name="marca"
                value="puma"
              />{" "}
              Puma
            </label>
          </div>
        </div>

        {/* Você pode repetir a estrutura 'div.mb-6' para outras seções como 'Categoria', 'Gênero', etc. */}
        {/* Exemplo de outra seção: Categoria */}
        <div className="mb-6">
          <label className="m-[30px] font-bold block mb-4" htmlFor="">
            Categoria
          </label>

          <div className="flex flex-col space-y-2 ml-[30px]">
            <label className="flex items-center cursor-pointer">
              <input
                className="mr-2 h-4 w-4 accent-blue-500"
                type="checkbox"
                name="categoria"
                value="esporte"
              />{" "}
              Esporte e lazer
            </label>

            <label className="flex items-center cursor-pointer">
              <input
                className="mr-2 h-4 w-4 accent-blue-500"
                type="checkbox"
                name="categoria"
                value="casual"
              />{" "}
              Casual
            </label>

            <label className="flex items-center cursor-pointer">
              <input
                className="mr-2 h-4 w-4 accent-blue-500"
                type="checkbox"
                name="categoria"
                value="utilitario"
              />{" "}
              Utilitário
            </label>

            <label className="flex items-center cursor-pointer">
              <input
                className="mr-2 h-4 w-4 accent-blue-500"
                type="checkbox"
                name="categoria"
                value="corrida"
              />{" "}
              Corrida
            </label>
                                  
          </div>

        {/* ...outras categorias */}
          <div className="mb-6">
          <label className="m-[30px] font-bold block mb-4">
            Gênero
          </label>
          <div className="flex flex-col space-y-2 ml-[30px]">
            <label className="flex items-center cursor-pointer">
              <input
                className="mr-2 h-4 w-4 accent-blue-500"
                type="checkbox"
                name="genero"
                value="masculino"
              /> Masculino
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                className="mr-2 h-4 w-4 accent-blue-500"
                type="checkbox"
                name="genero"
                value="feminino"
              /> Feminino
            </label>

            <label className="flex items-center cursor-pointer">
              <input
                className="mr-2 h-4 w-4 accent-blue-500"
                type="checkbox"
                name="genero"
                value="unisex"
              /> Unisex
            </label>
          </div>
        </div>

          <div className="mb-6">
          <label className="m-[30px] font-bold block mb-4">
            Estado
          </label>
          <div className="flex flex-col space-y-2 ml-[30px]">
            <label className="flex items-center cursor-pointer">
              <input
                className="mr-2 h-4 w-4 accent-blue-500"
                type="radio"
                name="genero"
                value="novo"
              /> Novo
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                className="mr-2 h-4 w-4 accent-blue-500"
                type="radio"
                name="genero"
                value="usado"
              /> Usado
            </label>

            
          </div>
        </div>
          
        </div>

      </aside>
      </section>
    </>
  );
};

export default FilterGroup;
