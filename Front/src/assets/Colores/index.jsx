import modoDefault from "./Paleta/ModoDefault/ModoDefult";

/**
 * Selector de modo actual (puede ser dinámico en el futuro)
 */
const MODO_ACTUAL = 'default';

const obtenerPaleta = () => {
  switch(MODO_ACTUAL) {
    case 'default':
      return modoDefault;
    default:
      return modoDefault;
  }
};

// Paleta activa que usan todos los componentes
export const paleta = obtenerPaleta();

// Exportar componentes específicos para uso directo
export const Boton = paleta.Boton;
export const Contenedor = paleta.Contenedor;
export const Texto = paleta.Texto;
export const Estado = paleta.Estado;

export default paleta;