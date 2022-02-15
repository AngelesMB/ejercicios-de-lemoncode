// Aquí irán todas las llamadas API al servidor
// Usando Axios
import Axios from 'axios';
// URL a donde apunta para hacer la llamada al login
const url = `${process.env.BASE_API_URL}/login`;

// Se conecta a la url, le pasa el objeto login y nos devuelve
// una respuesta en forma de booleano
export const isValidLogin = (login) =>
  Axios.post(url, login).then((response) => {
    return response.data;
  });
