// Aquí irán todas las llamadas API al servidor
// Usando Axios
import Axios from 'axios';
// URL a donde apunta para hacer la llamada a account-list y traernos los datos
const url = `${process.env.BASE_API_URL}/movements`;

// Se conecta a la url, le pasa el id y nos devuelve una respuesta
export const getMovementList = (id) =>
  Axios.get(url, { params: { accountId: id } }).then(({ data }) => data);
