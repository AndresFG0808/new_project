import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Link as RouterLink } from "react-router-dom";
import Layout from "../../../Router/Dashboard/Layout/Layout";
import { getSecureImage } from "../../../assets/Config/secureAssets";

const NotFound = () => {
  return (
    <Layout
      imgIcon={getSecureImage("sat")}
      textTitle="Bienvenido a tu Dashboard"
      textSubTitle="Aquí podrás gestionar tus módulos y configuraciones"
    >
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <ErrorOutlineIcon
          sx={{
            fontSize: 80,
            color: "error.main",
            mb: 2,
          }}
        />

        <Typography
          variant="h1"
          sx={{
            fontSize: "5rem",
            fontWeight: "bold",
            m: 0,
            mb: 1,
            color: "primary.main",
          }}
        >
          404
        </Typography>

        <Typography
          variant="h4"
          sx={{
            mb: 2,
            fontWeight: "bold",
            color: "text.primary",
          }}
        >
          Página no encontrada
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 3,
            color: "text.secondary",
            fontSize: "1.1rem",
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
      </Box>
    </Layout>
  );
};

export default NotFound;
