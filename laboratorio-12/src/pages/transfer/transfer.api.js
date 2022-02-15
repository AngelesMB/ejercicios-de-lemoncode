// Aquí irán todas las llamadas API al servidor
// Usando Axios
import Axios from 'axios';
// URL a donde apunta para hacer la llamada y traernos los datos
const url = `${process.env.BASE_API_URL}/transfer`;

// Insertamos datos de la transferencia
export const onPost = (transfer) =>
  Axios.post(url, transfer).then(({ data }) => data);
