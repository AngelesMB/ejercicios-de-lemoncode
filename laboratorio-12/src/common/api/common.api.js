import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/account`;

// GET recogemos datos de una cuenta según id
export const getAccount = (id) =>
  Axios.get(`${url}/${id}`).then((response) => {
    return response.data;
  });

// GET recogemos datos de todas las cuentas
export const getAccountList = () => Axios.get(url).then(({ data }) => data);
