import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/account`;
// POST creamos nuevos
export const insertAccount = (account) =>
  Axios.post(`${url}/${account.id}`, account).then((response) => {
    return response.data;
  });
// GET movido a carpeta común account.api.js
// // GET recogemos datos
// export const getAccount = (id) =>
//   Axios.get(`${url}/${id}`).then((response) => {
//     return response.data;
//   });
// PUT actualizamos datos
export const updateAccount = (account) =>
  Axios.put(`${url}/${account.id}`, account).then((response) => {
    return response.data;
  });
