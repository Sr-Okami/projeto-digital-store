const SortFilterPureCSS = ({ label, options, defaultValue, onSelect }) => {
  return (
    <div className="relative border border-gray-300 rounded-lg px-4 py-2 flex items-center w-full max-w-xs"
  style={{ background: "#F9F8FE" }}>
      <span className="font-bold text-gray-800 text-sm">{label}:</span>
      <select
        value={defaultValue}
        onChange={e => onSelect(e.target.value)}
        className="ml-2 font-normal text-gray-700 bg-transparent focus:outline-none flex-1 appearance-none pr-6"
        style={{ border: "none", boxShadow: "none" }}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
      {/* Ícone de seta azul */}
      <span className="pointer-events-none absolute right-3">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M6 8L10 12L14 8" stroke="#474747" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    </div>
  );
};

export default SortFilterPureCSS;