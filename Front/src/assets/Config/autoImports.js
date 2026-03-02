export const autoImports = [
  {
    from: "@/assets/Colores",
    imports: ["Boton", "Contenedor", "Texto", "Estado"],
  },
  {
    from: "@/assets/Config/secureAssets",
    imports: ["getSecureImage"],
  },
  {
    from: "@/Router/Dashboard/Layout/Layout",
    imports: [["default", "Layout"]],
  },
  {
    from: "@/Router/Dashboard/ContentModulos/ContentModulos",
    imports: [["default", "ContentModulos"]],
  },
  {
    from: "react",
    imports: [["default", "React"], "Suspense"],
  },
  {
    from: "react-router-dom",
    imports: ["Routes", "Route", ["BrowserRouter", "Router"]],
  },
];
