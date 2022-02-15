// Método que mapea la property de la api para el modelo vista
export const mapPropertyUploadedFromViewModelToApi = (propertyUploaded) => {
    return {
      ...propertyUploaded,
      title: propertyUploaded.title,
      notes: propertyUploaded.notes,
      email: propertyUploaded.email,
      phone: propertyUploaded.phone,
      price: parseInt(propertyUploaded.price),
      saleTypesIds: propertyUploaded.saleTypes,
      address: propertyUploaded.address,
      city: propertyUploaded.city,
      provinceId: propertyUploaded.province,
      squareMeter: parseInt(propertyUploaded.squareMeter),
      rooms: parseInt(propertyUploaded.rooms),
      bathrooms: parseInt(propertyUploaded.bathrooms),
      locationUrl: propertyUploaded.locationUrl,
      mainFeatures: propertyUploaded.mainFeatures,
      equipmentIds: propertyUploaded.equipments,
      images: propertyUploaded.images,
    };
  };