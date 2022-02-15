import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/contact`;
// POST creamos nuevos
export const onPost = (contactForm) =>
  Axios.post(url, contactForm).then(({ data }) => data);
