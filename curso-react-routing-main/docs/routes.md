# Mapa de rutas

## `/`
Home principal con hero, buscador destacado y propiedades recomendadas.

## `/search`
Página de resultados de búsqueda. Recibe filtros por query params.

## `/properties/:id`
Detalle de una propiedad específica.

## `/favorites`
Listado de propiedades favoritas del usuario.

## `/booking/:id`
Flujo de reserva para una propiedad.

## `/profile`
Perfil del usuario.

## `/login`
Pantalla de login simulado.

## `*`
Página 404 para rutas no encontradas.

## Tipos de rutas

- **Rutas estáticas:** `/`, `/search`, `/favorites`, `/profile`, `/login`.
- **Rutas dinámicas:** `/properties/:id` y `/booking/:id`.
- **Ruta comodín:** `*`, para cualquier URL que no coincida con una ruta definida.

## Componentes de página esperados

```txt
src/pages/
  HomePage.tsx
  SearchPage.tsx
  PropertyDetailPage.tsx
  FavoritesPage.tsx
  BookingPage.tsx
  ProfilePage.tsx
  LoginPage.tsx
  NotFoundPage.tsx
```

Una página coordina componentes más pequeños. Por ejemplo, `SearchPage` puede usar `SearchBar`, `PropertyList` y filtros.
