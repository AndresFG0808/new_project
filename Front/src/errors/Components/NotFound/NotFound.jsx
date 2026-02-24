import { Link as RouterLink } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Layout from '../../../Router/Dashboard/Layout/Layout';

const NotFound = () => {
  return (
    <Layout>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 'calc(100vh - 200px)',
        }}
      >
        <Container maxWidth="sm">
          <Paper
            sx={{
              p: 4,
              textAlign: 'center',
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            <ErrorOutlineIcon
              sx={{
                fontSize: 80,
                color: 'error.main',
                mb: 2,
              }}
            />

            <Typography
              variant="h1"
              sx={{
                fontSize: '5rem',
                fontWeight: 'bold',
                m: 0,
                mb: 1,
                color: 'primary.main',
              }}
            >
              404
            </Typography>

            <Typography
              variant="h4"
              sx={{
                mb: 2,
                fontWeight: 'bold',
                color: 'text.primary',
              }}
            >
              Página no encontrada
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mb: 3,
                color: 'text.secondary',
                fontSize: '1.1rem',
              }}
            >
              Lo sentimos, la página que estás buscando no existe o ha sido movida.
            </Typography>

            <Button
              component={RouterLink}
              to="/"
              variant="contained"
              size="large"
              sx={{
                mt: 2,
                px: 4,
              }}
            >
              Volver al Inicio
            </Button>
          </Paper>
        </Container>
      </Box>
    </Layout>
  );
};

export default NotFound;
