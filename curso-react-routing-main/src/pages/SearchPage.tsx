import { useSearchParams } from "react-router";
import { PropertyList } from "../components/properties/PropertyList";
import { SearchFilters } from "../components/search/SearchFilters";
import { properties } from "../data/properties";

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const destination = searchParams.get("destination") || "";
  const type = searchParams.get("type") || "";

  const filteredProperties = properties.filter((property) => {
    const matchesDestination = property.location
      .toLowerCase()
      .includes(destination.toLowerCase());
    const matchesType = type ? property.type === type : true;

    return matchesDestination && matchesType;
  });

  const handleFilterChange = (key: string, value: string) => {
    const nextParams = new URLSearchParams(searchParams);

    if (value) {
      nextParams.set(key, value);
    } else {
      nextParams.delete(key);
    }

    setSearchParams(nextParams);
  };

  return (
    <main className="main-content">
      <h1>Resultados de búsqueda</h1>
      <SearchFilters
        destination={destination}
        type={type}
        onChange={handleFilterChange}
        onClear={() => setSearchParams({})}
      />
      <PropertyList properties={filteredProperties} />
    </main>
  );
}
