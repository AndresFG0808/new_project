import { Box, Typography } from '@mui/material';

const Header = ({ title, subtitle }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
        {title}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
