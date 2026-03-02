const productivo = !window.location.host.includes('localhost');

const developmentApiPort = '5000'; // Debe coincidir con la API

const productionApiHost = 'https://api.name_of_productive.com';

const locationHost = !productivo
    ? `http://localhost:${developmentApiPort}/ProyectoRestaurantes/api` // IMPORTANTE el HTTP
    : productionApiHost;

const clientHost = `${window.location.protocol}//${window.location.host}/`;

export default {
    basename: '/',
    baseUrl: locationHost, // Esto va a ser http://localhost:5000/pruebaGit/api
    baseClientUrl: clientHost,
};