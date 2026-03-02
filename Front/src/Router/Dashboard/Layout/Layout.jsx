import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import { useSidebar } from "../context/SidebarContext";
import HeaderModules from "../Header/HeaderModules";
import { getSecureImage } from "../../../assets/Config/secureAssets";
import ContentModulos from "../ContentModulos/ContentModulos";

const Layout = ({ children, imgIcon = getSecureImage("sat"), textTitle, textSubTitle, }) => {
  const { sidebarOpen, handleMenuClick } = useSidebar();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", width: '100%'}}>
      <Navbar onMenuClick={handleMenuClick} />
      <Box sx={{ display: "flex", flexDirection: "row", mt: "64px", flex: 1 }}>
        <Sidebar open={sidebarOpen} />
        <Box sx={{ transition: "all 0.3s ease", flex: 1, display: "flex", flexDirection: "column",  }} >
          <Box sx={{ py: 4, px: 4 }}>
            <HeaderModules imgIcon={imgIcon} textTitle={textTitle} textSubTitle={textSubTitle} />
            <Divider sx={{ my: 3, mx: "auto", marginBottom: 5 }} />
            <ContentModulos>
              {children}
            </ContentModulos>
          </Box>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;