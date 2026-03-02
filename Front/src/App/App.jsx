import AppRouter from "../Router/AppRouter";
import { SidebarProvider } from "../Router/Dashboard/context/SidebarContext";

const App = () => {
  return (
    <SidebarProvider>
      <AppRouter />
    </SidebarProvider>
  );
};

export default App;