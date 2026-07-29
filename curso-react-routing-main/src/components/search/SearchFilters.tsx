type SearchFiltersProps = {
  destination: string;
  type: string;
  onChange: (key: string, value: string) => void;
  onClear: () => void;
};

export function SearchFilters({
  destination,
  type,
  onChange,
  onClear,
}: SearchFiltersProps) {
  return (
    <section className="filters">
      <input
        type="text"
        placeholder="Destino"
        value={destination}
        onChange={(event) => onChange("destination", event.target.value)}
      />

      <select
        value={type}
        onChange={(event) => onChange("type", event.target.value)}
      >
        <option value="">Todos</option>
        <option value="Apartamento">Apartamento</option>
        <option value="Casa">Casa</option>
        <option value="Loft">Loft</option>
        <option value="Cabaña">Cabaña</option>
        <option value="Estudio">Estudio</option>
        <option value="Villa">Villa</option>
      </select>

      <button type="button" onClick={onClear}>
        Limpiar filtros
      </button>
    </section>
  );
}
