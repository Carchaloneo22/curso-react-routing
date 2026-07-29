import { useNavigate } from "react-router";
import type { Property } from "../../types/property";

type PropertyCardProps = {
  property: Property;
};

export function PropertyCard({ property }: PropertyCardProps) {
  const navigate = useNavigate();

  return (
    <article
      className="property-card"
      onClick={() => navigate(`/properties/${property.id}`)}
    >
      <img src={property.image} alt={property.title} />
      <div className="property-card-content">
        <h4>{property.title}</h4>
        <p>{property.location}</p>
        {property.type && <p>{property.type}</p>}
        <strong>${property.price} / noche</strong>
      </div>
    </article>
  );
}
