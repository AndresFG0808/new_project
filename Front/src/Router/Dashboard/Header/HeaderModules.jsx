import { Box, Typography } from '@mui/material';

const HeaderModules = ({imgIcon, textTitle, textSubTitle}) => {

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <img 
        src={imgIcon} 
        alt="SAT Logo" 
        style={{ maxWidth: '150px', marginBottom: '14px' }}
      />
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
