import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSidebar } from '../../context/SidebarContext';

const Footer = () => {
  const DRAWER_WIDTH = 260;
  const { sidebarOpen } = useSidebar();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#2c3e50',
        color: 'white',
        py: 4,
        px: 0,
        m: 0,
        width: sidebarOpen ? { xs: '100%', sm: '100%', md: `calc(100% - ${DRAWER_WIDTH}px)` } : '100%',
        ml: sidebarOpen ? { xs: 0, sm: 0, md: `${DRAWER_WIDTH}px` } : 0,
        transition: 'width 0.3s ease, margin-left 0.3s ease',
      }}
    >
      <Container maxWidth={false} sx={{ px: 3 }}>
        <Grid container spacing={3} sx={{ mb: 3 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
              Gestor de Tareas
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              Aplicación para gestionar tus tareas de manera eficiente.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
              Enlaces Rápidos
            </Typography>
            <Link href="#" underline="hover" sx={{ display: 'block', mb: 0.5, color: 'inherit' }}>
              Inicio
            </Link>
            <Link href="#" underline="hover" sx={{ display: 'block', mb: 0.5, color: 'inherit' }}>
              Ayuda
            </Link>
            <Link href="#" underline="hover" sx={{ display: 'block', color: 'inherit' }}>
              Soporte
            </Link>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
              Contacto
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              Email: info@taskmanager.com
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              Teléfono: +34 123 456 789
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
              Síguenos
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              Facebook | Twitter | LinkedIn
            </Typography>
          </Grid>
        </Grid>

        <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.2)', pt: 2 }}>
          <Typography variant="body2" sx={{ textAlign: 'center', opacity: 0.8 }}>
            Hecho con <FavoriteIcon sx={{ fontSize: '1rem', color: '#FF6B6B', mx: 0.5 }} />
            por{' '}
            <Link href="#" underline="hover" sx={{ color: 'inherit' }}>
              El Equipo
            </Link>
          </Typography>
          <Typography variant="caption" sx={{ display: 'block', textAlign: 'center', mt: 1, opacity: 0.6 }}>
            © {currentYear} Gestor de Tareas. Todos los derechos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
