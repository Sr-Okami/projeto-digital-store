// Definição do componente FilterGroup
// Ele aceita as props: title, inputType e options
const FilterGroup = ({ title, inputType, options }) => {
  // O tipo de input padrão será 'checkbox' se não for fornecido ou for inválido
  const inputTypeValid = ["checkbox", "radio"].includes(inputType)
    ? inputType
    : "checkbox";
  const validInputType = inputType === "radio" ? "radio" : "checkbox";

  return (
    <div className="bg-white w-[380px] pt-4 rounded-md shadow-sm">
      {/* Container principal do grupo de filtros:
          - bg-white: Fundo branco.
          - w-[308px]: Largura fixa de 308px (largura de 308px, que é uma classe customizada).
          - p-4: Preenchimento de 16px (padding) em todas as direções.
          - rounded-md: Bordas arredondadas suaves.
          - shadow-sm: Adiciona uma pequena sombra.
      */}
      {/* Título do grupo de filtros */}
      <h3 className="text-dark-gray-2 text-base font-semibold mb-2 m-2">
        {/*
          - text-dark-gray-2: Cor do texto (assumindo que 'dark-gray-2' seja uma cor personalizada no Tailwind,
            caso contrário, use uma cor padrão como 'text-gray-800' ou 'text-gray-900').
          - text-base: Tamanho da fonte de 16px.
          - font-semibold: Peso da fonte semi-negrito.
          - mb-2: Margem inferior de 8px.
        */}
        {title}
      </h3>

      {/* Opções de filtro (checkboxes ou radios) */}
      <div className="space-y-2">
        {/* space-y-2: Adiciona um espaçamento vertical de 8px entre os elementos filhos. */}

        {options.map((option, index) => (
          <label
            key={option.value || option.text || index}
            className="flex items-center cursor-pointer"
          >
            {/*
              - label: O elemento <label> HTML.
              - key: Essencial para listas no React, ajuda a identificar cada item.
                     Usa option.value, ou option.text, ou o índice como fallback.
              - flex items-center: Usa Flexbox para alinhar o input e a label na mesma linha verticalmente.
              - cursor-pointer: Indica que o elemento é clicável.
            */}
            <input
              type={validInputType} // Define o tipo de input (checkbox ou radio)
              name={title} // 'name' é importante para grupos de radio buttons (garante que apenas um seja selecionável)
              value={option.value || option.text} // Usa 'value' se existir, se não usa 'text'
              className="mr-2 h-[22px] w-[22px] g-[10px] form-checkbox text-primary focus:ring-primary rounded"
              // As classes acima assumem que você configurou o plugin @tailwindcss/forms para 'form-checkbox'.
              // Caso contrário, algumas classes como 'form-checkbox' e 'rounded' podem não funcionar como esperado.
              // - mr-2: Margem à direita de 8px (separa o input da label).
              // - h-[22px] w-[22px]: Altura e largura fixas de 22px.
              // - form-checkbox: Classe do plugin @tailwindcss/forms para estilizar checkboxes/radios.
              // - text-primary: Cor do preenchimento do input quando selecionado (assumindo 'primary' seja uma cor personalizada).
              // - focus:ring-primary: Anel de foco na cor primary.
              // - rounded: Bordas arredondadas.
            />
            <span className="text-dark-gray-2 text-sm">
              {/*
                - text-dark-gray-2: Cor do texto da label (igual ao título).
                - text-sm: Tamanho da fonte da label (14px).
              */}
              {option.text}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterGroup;


