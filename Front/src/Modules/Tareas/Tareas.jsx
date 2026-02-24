import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import BuildIcon from '@mui/icons-material/Build';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Layout from '../../Router/Dashboard/Layout/Layout';

const Tareas = () => {
  // Datos en duro para pruebas
  const [tareas] = useState([
    {
      id: 1,
      titulo: 'Revisión de documentos',
      descripcion: 'Revisar todos los documentos pendientes del proyecto',
      estado: 'pendiente',
      prioridad: 'alta',
      fechaCreacion: '2026-02-20',
      fechaVencimiento: '2026-02-25',
    },
    {
      id: 2,
      titulo: 'Implementar autenticación',
      descripcion: 'Integrar sistema de login con JWT',
      estado: 'en_progreso',
      prioridad: 'alta',
      fechaCreacion: '2026-02-18',
      fechaVencimiento: '2026-02-28',
    },
    {
      id: 3,
      titulo: 'Diseño del dashboard',
      descripcion: 'Crear layout y componentes del dashboard principal',
      estado: 'completado',
      prioridad: 'media',
      fechaCreacion: '2026-02-15',
      fechaVencimiento: '2026-02-22',
    },
    {
      id: 4,
      titulo: 'Testing unitarios',
      descripcion: 'Crear tests para los servicios principales',
      estado: 'pendiente',
      prioridad: 'media',
      fechaCreacion: '2026-02-21',
      fechaVencimiento: '2026-03-05',
    },
    {
      id: 5,
      titulo: 'Documentación API',
      descripcion: 'Documentar todos los endpoints de la API',
      estado: 'pendiente',
      prioridad: 'baja',
      fechaCreacion: '2026-02-19',
      fechaVencimiento: '2026-03-10',
    },
  ]);

  const getEstadoColor = (estado) => {
    switch (estado) {
      case 'pendiente':
        return 'error';
      case 'en_progreso':
        return 'info';
      case 'completado':
        return 'success';
      default:
        return 'default';
    }
  };

  const getPrioridadColor = (prioridad) => {
    switch (prioridad) {
      case 'alta':
        return 'error';
      case 'media':
        return 'warning';
      case 'baja':
        return 'success';
      default:
        return 'default';
    }
  };

  const estadosPendientes = tareas.filter((t) => t.estado === 'pendiente').length;
  const estadosEnProgreso = tareas.filter((t) => t.estado === 'en_progreso').length;
  const estadosCompletados = tareas.filter((t) => t.estado === 'completado').length;

  const StatCard = ({ icon: Icon, title, value, color }) => (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box>
            <Typography color="textSecondary" gutterBottom>
              {title}
            </Typography>
            <Typography variant="h4" sx={{ color: color }}>
              {value}
            </Typography>
          </Box>
          <Box sx={{ fontSize: '2.5rem' }}>
            <Icon sx={{ fontSize: 'inherit', color: color }} />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <Layout title="📋 Mis Tareas" subtitle="Gestiona todas tus tareas">
      {/* Cards de resumen */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            icon={AssignmentIcon}
            title="Tareas Totales"
            value={tareas.length}
            color="primary"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            icon={HourglassEmptyIcon}
            title="Pendientes"
            value={estadosPendientes}
            color="error"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            icon={BuildIcon}
            title="En Progreso"
            value={estadosEnProgreso}
            color="info"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            icon={CheckCircleIcon}
            title="Completadas"
            value={estadosCompletados}
            color="success"
          />
        </Grid>
      </Grid>

      {/* Lista de tareas */}
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
          Mis Tareas
        </Typography>
        <Stack spacing={2}>
          {tareas.map((tarea) => (
            <Card key={tarea.id} sx={{ p: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', flex: 1 }}>
                  {tarea.titulo}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, ml: 2 }}>
                  <Chip
                    label={tarea.estado.replace('_', ' ')}
                    color={getEstadoColor(tarea.estado)}
                    size="small"
                  />
                  <Chip
                    label={tarea.prioridad}
                    variant="outlined"
                    color={getPrioridadColor(tarea.prioridad)}
                    size="small"
                  />
                </Box>
              </Box>
              <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                {tarea.descripcion}
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <CalendarTodayIcon sx={{ fontSize: '1rem' }} />
                  <Typography variant="caption">
                    Creada: {tarea.fechaCreacion}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <CalendarTodayIcon sx={{ fontSize: '1rem' }} />
                  <Typography variant="caption">
                    Vence: {tarea.fechaVencimiento}
                  </Typography>
                </Box>
              </Box>
            </Card>
          ))}
        </Stack>
      </Paper>
    </Layout>
  );
};

export default Tareas;
