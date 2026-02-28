import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Divider,
} from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useState } from "react";
import ImagenComponente from "../../../assets/images/ImagenComponente/ImagenComponente";
import { getSecureImage } from "../../../assets/Config/secureAssets";

const Navbar = ({ onMenuClick }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      position="fixed"
      sx={{ zIndex: 1300, width: "100%", backgroundColor: "#ffff" }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={onMenuClick}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1, flex: 1 }}>
          <ImagenComponente
            ImagenComponente={getSecureImage("satSinTexto")}
            width="30px"
            height="30px"
          />
          <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
            Gestor de Tareas
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton color="inherit" title="Notificaciones">
            <NotificationsIcon />
          </IconButton>
          <IconButton color="inherit" title="Configuración">
            <SettingsIcon />
          </IconButton>

          <IconButton
            onClick={handleMenuOpen}
            sx={{
              ml: 1,
              p: 0,
              "&:hover": { bgcolor: "rgba(255, 255, 255, 0.1)" },
            }}
          >
            <Avatar
              sx={{
                width: 36,
                height: 36,
                bgcolor: "#FF6B6B",
                cursor: "pointer",
              }}
            >
              U
            </Avatar>
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <MenuItem onClick={handleMenuClose}>Mi Perfil</MenuItem>
            <MenuItem onClick={handleMenuClose}>Preferencias</MenuItem>
            <Divider />
            <MenuItem onClick={handleMenuClose} sx={{ color: "error.main" }}>
              <LogoutIcon sx={{ mr: 1 }} />
              Cerrar Sesión
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </Box>
  );
};

export default Navbar;
