import Box from "@mui/material/Box";

const ContentModulos = ({children}) => {
    return (
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {children}
        </Box>
    )
}

export default ContentModulos;