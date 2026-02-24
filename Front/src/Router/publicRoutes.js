import React from 'react';

// Importa los componentes
const Inicio = React.lazy(() => import('../Modules/Inicio/Inicio'));
const Tareas = React.lazy(() => import('../Modules/Tareas/Tareas'));
const NotFound = React.lazy(() => import('../errors/Components/NotFound/NotFound'));

/**
 * Define las rutas públicas de la aplicación.
 * @typedef {Object} Route
 * @property {string} path - La ruta de la página.
 * @property {boolean} exact - Indica si la ruta es exacta.
 * @property {string} name - El nombre de la ruta.
 * @property {React.Component} component - El componente que se renderiza en la página.
 */

/**
 * Rutas públicas que no requieren autenticación.
 * @type {Array<Route>}
 */
const routes = [
    { path: '/', exact: true, name: 'Inicio', component: Inicio }, // Página de bienvenida
    { path: '/tareas', exact: true, name: 'Mis Tareas', component: Tareas }, // Página de gestión de tareas
    { path: '*', exact: true, name: 'NotFound', component: NotFound }, // Ruta para Not Found
];

export default routes;