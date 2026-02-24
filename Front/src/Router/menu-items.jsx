import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';

/**
 * Configuración del menú de navegación lateral (Dashboard)
 * Estas rutas corresponden a los elementos del sidebar en el dashboard/navbar.
 */
const menuItems = {
    items: [
        {
            id: 'principal',
            title: 'Principal',
            type: 'collapse',
            icon: <DashboardIcon />,
            children: [
                {
                    id: 'inicio',
                    title: 'Inicio',
                    type: 'item',
                    url: '/',
                    icon: <DashboardIcon />,
                },
            ],
        },
        {
            id: 'acciones',
            title: 'Acciones',
            type: 'collapse',
            icon: <DashboardIcon />,
            children: [
                {
                    id: 'tareas_acciones',
                    title: 'Mis Tareas',
                    type: 'item',
                    url: '/tareas',
                    icon: <AssignmentIcon />,
                },
            ],
        },
    ],
};

export { menuItems };