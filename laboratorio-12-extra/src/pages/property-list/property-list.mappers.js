/*
Necesitaremos mappear nuestros datos de servidor para conseguir:
id: string
title: string
rooms: string / pasamos a string para añadir 'habitaciones'
squareMeter: string / pasamos a string 136m2
notes: string /Truncamos a 240 caracteres y añadimos '...'
price: string / pasamos a string para añadir € 
image: string / Cogemos primera imagen en base64
*/

// Como la lista de inmuebles es un array lo que exportamos es un método que
// mapee inmueble a inmueble con el método individual de abajo
export const mapPropertyListFromApiToViewModel = (propertyList) => {
    return propertyList.map((property) =>
      mapPropertyFromApiToViewModel(property)
    );
  };
  
  // Mapeo para un solo inmueble
  const mapPropertyFromApiToViewModel = (property) => {
    return {
      id: property.id,
      title: property.title,
      rooms: `${property.rooms} ${getRoomWord(property.rooms)}`,
      squareMeter: `${property.squareMeter}m2`,
      // Usamos método de strings substring para 'acortar' el texto empezando del caracter 0 al 240
      notes: `${property.notes.substring(0, 240)}...`,
      // Usamos método to locale string para usar configuraciçon de números y comas local
      price: `${property.price.toLocaleString()}€`,
      image: Array.isArray(property.images) ? property.images[0] : '',
    };
  };
  
  const getRoomWord = (rooms) => {
    return rooms > 1 ? 'habitaciones' : 'habitación';
  };
  
  // Mapeo desde el objeto filter a la url con query params
  export const mapFilterToQueryParams = (filter) => {
    let queryParams = '';
    // Si filter tiene valor, es decir, se ha seleccionado algo dentro de saleTypeId,
    // añadimos ese filtro a la url
    if (filter.saleTypeId) {
      // like: en el array de saleTypeIds busca el id que coincida con el que le estamos pasando
      queryParams = `${queryParams}saleTypeIds_like=${filter.saleTypeId}&`;
    }
    if (filter.provinceId) {
      queryParams = `${queryParams}provinceId=${filter.provinceId}&`;
    }
    if (filter.minRooms) {
      // gte: greater than or equal
      queryParams = `${queryParams}rooms_gte=${filter.minRooms}&`;
    }
    if (filter.minBathrooms) {
      queryParams = `${queryParams}bathrooms_gte=${filter.minBathrooms}&`;
    }
    if (filter.minPrice) {
      queryParams = `${queryParams}price_gte=${filter.minPrice}&`;
    }
    if (filter.maxPrice) {
      // lte: lower than or equal
      queryParams = `${queryParams}price_lte=${filter.maxPrice}&`;
    }
    // Hacemos el slice para quitar el último & y no dejarlo ahí sin nada detrás
    return queryParams.slice(0, -1);
  };
  