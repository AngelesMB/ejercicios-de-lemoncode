// Método que mapea la property de la api para el modelo vista
export const mapPropertyFromApiToViewModel = (property, equipmentsList) => {
    return {
      ...property,
      id: property.id,
      mainImage: Array.isArray(property.images) ? property.images[0] : '',
      title: property.title,
      city: property.city,
      rooms: `${property.rooms} ${getRoomWord(property.rooms)}`,
      squareMeter: `${property.squareMeter}m2`,
      bathrooms: `${property.bathrooms} ${getBathroomWord(property.bathrooms)}`,
      price: `${property.price.toLocaleString()}€`,
      notes: property.notes,
      mainFeatures: property.mainFeatures,
      equipments: mapEquipments(property.equipmentIds, equipmentsList),
      locationUrl: property.locationUrl,
      images: Array.isArray(property.images) ? property.images : [],
    };
  };
  
  const getRoomWord = (rooms) => {
    return rooms > 1 ? 'habitaciones' : 'habitación';
  };
  const getBathroomWord = (bathrooms) => {
    return bathrooms > 1 ? 'baños' : 'baño';
  };
  
  const setEquipmentName = (equipments, propertyEquipmentId) => {
    const equipmentFound = equipments.find(
      (equipment) => equipment.id === propertyEquipmentId
    );
    return equipmentFound.name;
  };
  const mapEquipments = (propertyEquipmentIds, equipments) => {
    return propertyEquipmentIds.map((propertyEquipmentId) =>
      setEquipmentName(equipments, propertyEquipmentId)
    );
  };
  