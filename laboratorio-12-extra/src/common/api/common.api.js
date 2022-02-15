import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/properties`;

// GET recogemos datos de una propiedad según id
export const getProperty = (id) =>
  Axios.get(`${url}/${id}`).then((response) => {
    return response.data;
  });

// GET para traer lista de tipo de venta/alquiler, y para las provincias
const saleTypeListUrl = `${process.env.BASE_API_URL}/saleTypes`;
export const getSaleTypeList = () =>
  Axios.get(saleTypeListUrl).then((response) => {
    return response.data;
  });

const provinceListUrl = `${process.env.BASE_API_URL}/provinces`;
export const getProvinceList = () =>
  Axios.get(provinceListUrl).then((response) => {
    return response.data;
  });

// GET para obtener la lista de inmuebles del servidor ya filtrados
const equipmentListUrl = `${process.env.BASE_API_URL}/equipments`;

export const getEquipmentsList = () =>
  Axios.get(equipmentListUrl).then((response) => {
    return response.data;
  });