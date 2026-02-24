import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link as RouterLink } from 'react-router-dom';
import Layout from '../../Router/Dashboard/Layout/Layout';
import AssignmentIcon from '@mui/icons-material/Assignment';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Inicio = () => {
  const features = [
    {
      title: 'Gestión Eficiente',
      description: 'Organiza tus tareas de manera simple y efectiva',
      icon: AssignmentIcon,
    },
    {
      title: 'Seguimiento en Tiempo Real',
      description: 'Monitorea el progreso de tus proyectos',
      icon: CheckCircleIcon,
    },
    {
      title: 'Interfaz Intuitiva',
      description: 'Diseñado para la máxima usabilidad',
      icon: RocketLaunchIcon,
    },
  ];

  return (
    <Layout title="🎉 Bienvenido" subtitle="Al Gestor de Tareas">
      {/* Hero Section */}
      <Paper
        sx={{
          p: { xs: 3, md: 5 },
          textAlign: 'center',
          mb: 6,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          borderRadius: 2,
        }}
      >
        <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
          ¡Bienvenido a tu Gestor de Tareas!
        </Typography>
        <Typography variant="h6" sx={{ mb: 3, opacity: 0.95 }}>
          La herramienta perfecta para organizar y gestionar todas tus tareas en un solo lugar.
        </Typography>
        <Button
          component={RouterLink}
          to="/tareas"
          variant="contained"
          size="large"
          sx={{
            backgroundColor: 'white',
            color: '#667eea',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#f0f0f0',
            },
          }}
        >
          Ver mis Tareas
        </Button>
      </Paper>

      {/* Features Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center' }}>
          Características Principales
        </Typography>
        <Grid container spacing={3}>
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flex: 1, textAlign: 'center' }}>
                    <Box
                      sx={{
                        fontSize: '3rem',
                        mb: 2,
                        color: 'primary.main',
                      }}
                    >
                      <IconComponent sx={{ fontSize: 'inherit' }} />
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>

      {/* Getting Started Section */}
      <Paper sx={{ p: 4, bgcolor: '#f5f5f5', borderRadius: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          🚀 Primeros Pasos
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Para comenzar a usar el Gestor de Tareas:
        </Typography>
        <Box component="ol" sx={{ pl: 2 }}>
          <Typography component="li" variant="body2" sx={{ mb: 1 }}>
            Accede a la sección "Mis Tareas" para ver todas tus tareas
          </Typography>
          <Typography component="li" variant="body2" sx={{ mb: 1 }}>
            Crea nuevas tareas especificando título, descripción y prioridad
          </Typography>
          <Typography component="li" variant="body2" sx={{ mb: 1 }}>
            Actualiza el estado de tus tareas mientras avanzas
          </Typography>
          <Typography component="li" variant="body2">
            Monitorea tu progreso con el resumen de tareas
          </Typography>
        </Box>
      </Paper>
    </Layout>
  );
};

export default Inicio;
