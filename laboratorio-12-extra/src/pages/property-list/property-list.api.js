import Axios from 'axios';

// GET para obtener la lista de inmuebles del servidor ya filtrados
const propertyListUrl = `${process.env.BASE_API_URL}/properties?`;
export const getPropertyList = (queryParams) =>
  Axios.get(`${propertyListUrl}${queryParams}`).then(({ data }) => data);