import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Layout from "../../Router/Dashboard/Layout/Layout";
import { getSecureImage } from "../../assets/Config/secureAssets";

const Tareas = () => {
  return (
    <Layout imgIcon={getSecureImage('sat')} textTitle="Bienvenido a tu Dashboard" textSubTitle="Aquí podrás gestionar tus módulos y configuraciones">
      <Box sx={{ my: 4 }}>
        <Typography variant="h6" gutterBottom>
          Contenedor de tareas
        </Typography>
      </Box>
    </Layout>
  );
};

export default Tareas;
