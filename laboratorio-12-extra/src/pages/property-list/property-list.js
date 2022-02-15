import {
    getPropertyList
  } from './property-list.api';
  import { getProvinceList,getSaleTypeList } from "../../common/api/common.api";
  import {
    addPropertyRows,
    setOptions,
    clearPropertyRows,
  } from './property-list.helpers';
  import {
    mapPropertyListFromApiToViewModel,
    mapFilterToQueryParams,
  } from './property-list.mappers';
  import {
    roomOptions,
    bathroomOptions,
    minPriceOptions,
    maxPriceOptions,
  } from './property-list.constants';
  import { onUpdateField, onSubmitForm } from '../../common/helpers';
  
  // Le pasamos todas las promesas que queremos que se resuelvan antes de hacer el .then
  Promise.all([getPropertyList(), getSaleTypeList(), getProvinceList()]).then(
    (resultList) => {
      // Al array resultante le hacemos un destructuring para obtener 3 diferentes
      const [propertyList, saleTypeList, provinceList] = resultList;
      loadPropertyList(propertyList);
      // Pintamos las opciones de filtrado trayendo datos maestros desde el servidor
      setOptions(saleTypeList, 'select-sale-type', '¿Qué venta?');
      setOptions(provinceList, 'select-province', '¿Dónde?');
      // Pintamos las opciones de filtrado trayeno datos maestros desde cliente
      setOptions(roomOptions, 'select-room', '¿Habitaciones?');
      setOptions(bathroomOptions, 'select-bathroom', '¿Cuartos de baño?');
      setOptions(minPriceOptions, 'select-min-price', 'Mín (EUR)');
      setOptions(maxPriceOptions, 'select-max-price', 'Máx (EUR)');
    }
  );
  
  // Traemos el array de inmuebles de servidor y lo mappeamos y cargamos en vista
  const loadPropertyList = (propertyList) => {
    const viewModelPropertyList = mapPropertyListFromApiToViewModel(propertyList);
    // Pintamos las filas con cada propiedad mappeada
    addPropertyRows(viewModelPropertyList);
  };
  
  // Recogemos todo lo que el usuario selecciona en los filtros
  // Modelamos un objeto de lo que estamos representando en la vista
  let filter = {
    saleTypeId: '',
    provinceId: '',
    minRooms: '',
    minBathRooms: '',
    minPrice: '',
    maxPrice: '',
  };
  
  // Cada vez que se actualiza un select recogemos la opción elegida
  
  onUpdateField('select-sale-type', (event) => {
    const value = event.target.value;
    filter = {
      ...filter,
      saleTypeId: value,
    };
  });
  onUpdateField('select-province', (event) => {
    const value = event.target.value;
    filter = {
      ...filter,
      provinceId: value,
    };
  });
  onUpdateField('select-room', (event) => {
    const value = event.target.value;
    filter = {
      ...filter,
      minRooms: value,
    };
  });
  onUpdateField('select-bathroom', (event) => {
    const value = event.target.value;
    filter = {
      ...filter,
      minBathRooms: value,
    };
  });
  onUpdateField('select-min-price', (event) => {
    const value = event.target.value;
    filter = {
      ...filter,
      minPrice: value,
    };
  });
  onUpdateField('select-max-price', (event) => {
    const value = event.target.value;
    filter = {
      ...filter,
      maxPrice: value,
    };
  });
  
  // Al presionar el botón de buscar filtramos según las opciones elegidas
  // Hacemos una petición a servidor con los campos que informamos según los filtros
  // Tendremos que tener un mapper que nos convierta nuestro objeto filter en la url que necesitamos
  // URL actual: http://localhost:3000/api/properties
  // Para filtrar por mínimo de habitación y usando métodos de json-server cambiaría a
  // `http://localhost:3000/api/properties?romms_gte=${filter.minRooms}`
  onSubmitForm('search-button', () => {
    const queryParams = mapFilterToQueryParams(filter);
    clearPropertyRows();
    getPropertyList(queryParams).then((propertyList) => {
      loadPropertyList(propertyList);
    });
  });
  