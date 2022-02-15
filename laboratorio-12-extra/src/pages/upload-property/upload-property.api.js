import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/properties`;
// POST creamos nuevos
export const onPostProperty = (propertyUploaded) =>
  Axios.post(url, propertyUploaded).then(({ data }) => data);