import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Layout from '@/Router/Dashboard/Layout/Layout';
import { getSecureImage } from '@/assets/Config/secureAssets';
import { Boton } from '@/assets/Colores';

const Inicio = () => {
  return (
    <Layout imgIcon={getSecureImage('sat')} textTitle="Bienvenido a tu Dashboard" textSubTitle="Aquí podrás gestionar tus módulos y configuraciones">
      <Box sx={{backgroundColor: Boton.fondoPrimario}}>
        <Typography variant="h6" gutterBottom>
          Pagina de Inicio
        </Typography>
      </Box>
    </Layout>
  );
};

export default Inicio;
