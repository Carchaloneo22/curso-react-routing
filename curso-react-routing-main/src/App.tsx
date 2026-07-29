import { useEffect, useState } from "react";
import type { Property } from "./types/property";
import { Header } from "./components/layout/Header";
import { Hero } from "./components/ui/Hero";
import { SearchBar } from "./components/ui/SearchBar";
import { PropertyList } from "./components/properties/PropertyList";
import { properties } from "./data/properties";
import { filterProperties } from "./utils/filterProperties";

function App() {
  const [city, setCity] = useState("");
  const [search, setSearch] = useState("");
  const [propertyList, setPropertyList] = useState<Property[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const timerId = setTimeout(() => {
      try {
        setPropertyList(properties);
      } catch {
        setError("No pudimos cargar las propiedades.");
      } finally {
        setIsLoading(false);
      }
    }, 1000);

    return () => clearTimeout(timerId);
  }, []);

  const filteredProperties = filterProperties(propertyList, search);

  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <Hero />

        <SearchBar
          value={city}
          searchedValue={search}
          onChange={setCity}
          onSearch={setSearch}
          onClear={() => {
            setCity("");
            setSearch("");
          }}
        />

        {isLoading && <p>Cargando propiedades...</p>}

        {error && <p>{error}</p>}

        {!isLoading && !error && (
          <PropertyList properties={filteredProperties} />
        )}
      </main>
    </div>
  );
}

export default App;
