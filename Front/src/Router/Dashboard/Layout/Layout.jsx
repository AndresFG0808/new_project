import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { SidebarProvider } from '../../context/SidebarContext';

const DRAWER_WIDTH = 260;

const Layout = ({ children, title, subtitle }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleMenuClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <SidebarProvider sidebarOpen={sidebarOpen}>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Navbar */}
        <Navbar onMenuClick={handleMenuClick} />

        {/* Main Content */}
        <Box sx={{ display: 'flex', flex: 1, mt: '64px' }}>
          {/* Sidebar */}
          <Sidebar open={sidebarOpen} />

          {/* Page Content */}
          <Box
            component="main"
            sx={{
              flex: 1,
              overflowY: 'auto',
            }}
          >
            <Box sx={{ py: 3, px: { xs: 3, sm: 3, md: 2 } }}>
              <Container maxWidth="lg">
                {(title || subtitle) && <Header title={title} subtitle={subtitle} />}
                {children}
              </Container>
            </Box>
          </Box>
        </Box>
        {/* Footer */}
        <Footer />
      </Box>
    </SidebarProvider>
  );
};

export default Layout;
