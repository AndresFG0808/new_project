import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import { useSidebar } from "../../context/SidebarContext";
import HeaderModules from "../Header/HeaderModules";
import { getSecureImage } from "../../../assets/Config/secureAssets";

const Layout = ({ children, imgIcon = getSecureImage('sat'), textTitle, textSubTitle }) => {
  const { sidebarOpen, handleMenuClick } = useSidebar();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar onMenuClick={handleMenuClick} />
      <Box sx={{ display: "flex", flexDirection: "row", mt: "64px", flex: 1 }}>
        <Sidebar open={sidebarOpen} />
        <Box sx={{ transition: "all 0.3s ease", flex: 1, display: "flex", flexDirection: "column" }}>
          <Box sx={{ py: 5, px: 5 }}>
            <HeaderModules 
              imgIcon={imgIcon} 
              textTitle={textTitle} 
              textSubTitle={textSubTitle} />
            <Divider sx={{ my: 3, mx: 'auto' }} />
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              {children}
            </Box>
          </Box>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
