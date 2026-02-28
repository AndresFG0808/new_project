import logoSat from '../images/logos/logo-sat.png';
import logoSatSinTexto from '../images/logos/Logo_del_SAT_sin_texto.svg';

/**
 * Objeto con todos los logos/imágenes disponibles
 * @private - Solo para uso interno
 */
const ImageIcons = {
  sat: logoSat,
  satSinTexto: logoSatSinTexto
};

/**
 * Obtiene una imagen segura del cliente
 * @param {string} imageName - Nombre de la imagen en ImageIcons
 * @returns {string} Ruta a la imagen
 * 
 * @example
 * getSecureImage('sat') // Retorna el logo SAT con texto
 * getSecureImage('satSinTexto') // Retorna el logo SAT sin texto
 */
export const getSecureImage = (imageName) => {
  if (ImageIcons[imageName]) {
    return ImageIcons[imageName];
  }
  console.warn(`Imagen no encontrada: ${imageName}`);
  return '/placeholder-logo.png';
};

export default {
  getSecureImage,
};
