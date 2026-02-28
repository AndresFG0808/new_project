import { Box } from "@mui/material";

const ImagenComponente = ({ ImagenComponente, width = "50px", height = "50px" }) => {
  return (
    <Box sx={{ width, height }}>
      <img
        src={ImagenComponente}
        alt="SAT Logo"
        style={{ 
          width: "100%",
          height: "100%",
          objectFit: "contain"
        }}
      />
    </Box>
  );
};

export default ImagenComponente;
