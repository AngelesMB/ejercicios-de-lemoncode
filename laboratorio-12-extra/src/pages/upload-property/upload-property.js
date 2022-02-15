import {
  onUpdateField,
  onSubmitForm,
  onSetError,
  onSetFormErrors,
  onAddFile,
} from '../../common/helpers/element.helpers';
import {
  setCheckboxList,
  setOptionList,
  onAddFeature,
  formatCheckboxId,
  formatDeleteFeatureButtonId,
  onRemoveFeature,
  onAddImage,
} from './upload-property.helpers';
import {
  getProvinceList,
  getSaleTypeList,
  getEquipmentsList,
} from '../../common/api/common.api';
import { formValidation } from './upload-property.validations';
import { mapPropertyUploadedFromViewModelToApi } from './upload-property.mappers';
import { onPostProperty } from './upload-property.api';

const addElement = (value, obj, id) => {
  return { ...obj, [id]: [...obj[id], value] };
};
const removeElement = (value, obj, id) => {
  return { ...obj, [id]: obj[id].filter((item) => item !== value) };
};

// Método para recoger los datos del checkbox de saleTypes
const setEvents = (myList, id) => {
  myList.forEach((item) => {
    const typeId = formatCheckboxId(item);
    onUpdateField(typeId, (event) => {
      const value = event.target.value;
      if (event.target.checked === true) {
        propertyUploaded = addElement(value, propertyUploaded, id);
      } else {
        propertyUploaded = removeElement(value, propertyUploaded, id);
      }
      formValidation.validateField(id, propertyUploaded[id]).then((result) => {
        onSetError(id, result);
      });
    });
  });
};

// Llamamos a la lista de tipos de venta/alquiler y al listado de provincias al mismo tiempo
Promise.all([getSaleTypeList(), getProvinceList(), getEquipmentsList()]).then(
  // Al array resultante le hacemos un destructuring para obtener 2 diferentes
  ([saleTypeList, provinceList, equipmentsList]) => {
    // Llamamos método para pintar checkbox de tipos de venta/alquiler y equipamiento
    setCheckboxList(saleTypeList, 'saleTypes');
    setCheckboxList(equipmentsList, 'equipments');
    // Llamamos método para pintar listado de provincias del select
    setOptionList(provinceList, 'province');
    setEvents(saleTypeList, 'saleTypes');
    setEvents(equipmentsList, 'equipments');
  }
);

// Creamos objeto para recoger info del usuario
let propertyUploaded = {
  title: '',
  notes: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  province: '',
  squareMeter: '',
  price: '',
  saleTypes: [],
  rooms: '',
  bathrooms: '',
  locationUrl: '',
  mainFeatures: [],
  equipments: [],
  images: [],
};

// Recuperar los valores del formulario de Datos generales.
// Llamamos al método para recoger los valores del formulario
onUpdateField('title', (event) => {
  const value = event.target.value;
  propertyUploaded = {
    ...propertyUploaded,
    title: value,
  };
  // Crear validaciones necesarias de dicho formulario.
  // Cada vez que se modifica el campo queremos que se ejecuten las validaciones
  formValidation
    .validateField('title', propertyUploaded.title)
    .then((result) => {
      onSetError('title', result);
    });
});
// Hacemos lo mismo para todos los demás campos
onUpdateField('notes', (event) => {
  const value = event.target.value;
  propertyUploaded = {
    ...propertyUploaded,
    notes: value,
  };
  formValidation
    .validateField('notes', propertyUploaded.notes)
    .then((result) => {
      onSetError('notes', result);
    });
});
onUpdateField('email', (event) => {
  const value = event.target.value;
  propertyUploaded = {
    ...propertyUploaded,
    email: value,
  };
  formValidation
    .validateField('email', propertyUploaded.email)
    .then((result) => {
      onSetError('email', result);
    });
});
onUpdateField('phone', (event) => {
  const value = event.target.value;
  propertyUploaded = {
    ...propertyUploaded,
    phone: value,
  };
  formValidation
    .validateField('phone', propertyUploaded.phone)
    .then((result) => {
      onSetError('phone', result);
    });
});

// Recuperar los valores del formulario de Datos de la vivienda.
// Crear validaciones necesarias de dicho formulario.
onUpdateField('address', (event) => {
  const value = event.target.value;
  propertyUploaded = {
    ...propertyUploaded,
    address: value,
  };
  formValidation
    .validateField('address', propertyUploaded.address)
    .then((result) => {
      onSetError('address', result);
    });
});
onUpdateField('city', (event) => {
  const value = event.target.value;
  propertyUploaded = {
    ...propertyUploaded,
    city: value,
  };
  formValidation.validateField('city', propertyUploaded.city).then((result) => {
    onSetError('city', result);
  });
});
onUpdateField('province', (event) => {
  const value = event.target.value;
  propertyUploaded = {
    ...propertyUploaded,
    province: value,
  };
  formValidation
    .validateField('province', propertyUploaded.province)
    .then((result) => {
      onSetError('province', result);
    });
});
onUpdateField('squareMeter', (event) => {
  const value = event.target.value;
  propertyUploaded = {
    ...propertyUploaded,
    squareMeter: value,
  };
  formValidation
    .validateField('squareMeter', propertyUploaded.squareMeter)
    .then((result) => {
      onSetError('squareMeter', result);
    });
});
onUpdateField('price', (event) => {
  const value = event.target.value;
  propertyUploaded = {
    ...propertyUploaded,
    price: value,
  };
  formValidation
    .validateField('price', propertyUploaded.price)
    .then((result) => {
      onSetError('price', result);
    });
});
onUpdateField('rooms', (event) => {
  const value = event.target.value;
  propertyUploaded = {
    ...propertyUploaded,
    rooms: value,
  };
  formValidation
    .validateField('rooms', propertyUploaded.rooms)
    .then((result) => {
      onSetError('rooms', result);
    });
});
onUpdateField('bathrooms', (event) => {
  const value = event.target.value;
  propertyUploaded = {
    ...propertyUploaded,
    bathrooms: value,
  };
  formValidation
    .validateField('bathrooms', propertyUploaded.bathrooms)
    .then((result) => {
      onSetError('bathrooms', result);
    });
});
onUpdateField('locationUrl', (event) => {
  const value = event.target.value;
  propertyUploaded = {
    ...propertyUploaded,
    locationUrl: value,
  };
  formValidation
    .validateField('locationUrl', propertyUploaded.locationUrl)
    .then((result) => {
      onSetError('locationUrl', result);
    });
});

onSubmitForm('insert-feature-button', () => {
  const value = document.getElementById('newFeature').value;
  if (value) {
    const deleteId = formatDeleteFeatureButtonId(value);
    propertyUploaded = addElement(value, propertyUploaded, 'mainFeatures');
    onAddFeature(value);
    onSubmitForm(deleteId, () => {
      onRemoveFeature(value);
      propertyUploaded = removeElement(value, propertyUploaded, 'mainFeatures');
    });
  }
});

onAddFile('add-image', (value) => {
  onAddImage(value);
  propertyUploaded = addElement(value, propertyUploaded, 'images');
});

// Crear método post para enviar información del formulario
onSubmitForm('save-button', () => {
  // También validamos el formulario entero
  formValidation.validateForm(propertyUploaded).then((result) => {
    onSetFormErrors(result);
    // Crear mapper para cumplir con el modelo de la api
    const apiPropertyUploaded =
      mapPropertyUploadedFromViewModelToApi(propertyUploaded);
    console.log({propertyUploaded});
    console.log({apiPropertyUploaded});
    // Si no hay ningún error, lo siguiente sería mandar esos datos al servidor usando axios
    if (result.succeeded) {
      onPostProperty(apiPropertyUploaded).then(() => {
        window.alert('Propiedad subida con éxito');
        // Cuando guarda los datos volvemos a la página anterior
        history.back();
      });
    }
  });
});
