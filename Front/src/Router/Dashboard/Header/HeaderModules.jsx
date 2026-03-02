import { Box, Typography } from '@mui/material';
import ImagenComponente from '../../../assets/images/ImagenComponente/ImagenComponente';

const HeaderModules = ({imgIcon, textTitle, textSubTitle}) => {

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <ImagenComponente ImagenComponente={imgIcon} width={100} />
      <Typography fontSize={30} variant="body1" color="initial" sx={{ fontWeight: 'bold' }}>
        {textTitle}
      </Typography>
      <Typography variant="body1" color="secondary">
        {textSubTitle}
      </Typography>
    </Box>
  );
};

export default HeaderModules;
