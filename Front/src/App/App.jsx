import AppRouter from "../Router/AppRouter";
import { SidebarProvider } from "../Router/context/SidebarContext";

const App = () => {
  return (
    <SidebarProvider>
      <AppRouter />
    </SidebarProvider>
  );
};

export default App;