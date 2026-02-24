import { createContext, useContext } from 'react';

const SidebarContext = createContext();

export const SidebarProvider = ({ children, sidebarOpen }) => {
  return (
    <SidebarContext.Provider value={{ sidebarOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar debe ser usado dentro de SidebarProvider');
  }
  return context;
};
