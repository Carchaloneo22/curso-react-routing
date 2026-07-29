# Curso de Routing en React — Clon estilo Platzi-host

Curso práctico de React donde continuamos el proyecto del curso básico y convertimos la home de **Platzi-host** en una aplicación multipágina con **React Router v7**.

## Proyecto: Platzi-host Routing

Una aplicación web con:
- Home con hero y propiedades recomendadas
- Página de resultados de búsqueda
- Detalle dinámico de propiedades
- Favoritos, perfil y login simulado
- Flujo de reserva
- Query params, rutas protegidas, loaders, lazy loading y manejo de errores por ruta

## Tecnologías

- React 19
- Vite
- TypeScript
- React Router v7 en modo librería

## Base del curso

Este repositorio parte de la última rama del curso anterior: `clase-17/cierre` de `curso-react-basico`.

## Estructura del curso por ramas

Cada clase tiene su propia rama para que puedas seguir el progreso paso a paso:

| Rama | Clase | Tema |
|------|-------|------|
| `clase-01/bienvenida-routing` | 1 | Bienvenida al curso y por qué necesitamos routing |
| `clase-02/mapa-rutas` | 2 | Mapa de rutas del clon |
| `clase-03/react-router` | 3 | Instalación y configuración de React Router v7 |
| `clase-04/rutas-principales` | 4 | Creación de rutas principales |
| `clase-05/link-navlink` | 5 | Navegación con Link y NavLink |
| `clase-06/navegacion-programatica` | 6 | Navegación programática |
| `clase-07/layout-outlet` | 7 | Layout principal con Outlet |
| `clase-08/layouts-anidados` | 8 | Layouts anidados para secciones y flujos |
| `clase-09/params-dinamicos` | 9 | Parámetros dinámicos con useParams |
| `clase-10/detalle-propiedad` | 10 | Página de detalle de propiedad |
| `clase-11/not-found` | 11 | Página 404 y estados no encontrados |
| `clase-12/query-params` | 12 | Query params para búsqueda |
| `clase-13/filtros-url` | 13 | Sincronización de filtros con la URL |
| `clase-14/rutas-protegidas` | 14 | Rutas protegidas |
| `clase-15/login-logout` | 15 | Simulación de login y logout |
| `clase-16/loaders` | 16 | Loaders y carga de datos por ruta |
| `clase-17/lazy-loading` | 17 | Lazy loading de páginas |
| `clase-18/error-element` | 18 | Manejo de errores por ruta |
| `clase-19/comparativa-routing` | 19 | React Router, TanStack Router y Next.js Routing |
| `clase-20/cierre` | 20 | Cierre y entrega del proyecto |

## Cómo usar este repositorio

1. Clona el repositorio:
   ```bash
   git clone https://github.com/erasmoh/curso-react-routing.git
   cd curso-react-routing
   ```

2. Cambia a la rama de la clase que quieras revisar:
   ```bash
   git checkout clase-03/react-router
   ```

3. Instala dependencias:
   ```bash
   npm install
   ```

4. Levanta el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Ruta del curso

### Primera parte: rutas y navegación
- Diseñar el mapa de rutas
- Instalar React Router
- Crear páginas y rutas principales
- Navegar con Link, NavLink y useNavigate
- Usar layouts con Outlet

### Segunda parte: datos, protección y performance
- Rutas dinámicas y páginas de detalle
- Query params para filtros de búsqueda
- Rutas protegidas y login simulado
- Loaders por ruta
- Lazy loading de páginas
- Manejo de errores por ruta

## Datos mock

El proyecto no tiene backend. Usamos datos mock para simular propiedades y enfocarnos en routing.

## Licencia

Este proyecto es material educativo.
