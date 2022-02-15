import {
    onUpdateField,
    onSubmitForm,
    onSetError,
    onSetFormErrors,
    onSetValues,
  } from '../../common/helpers/element.helpers';
  import { onPost } from './property-detail.api';
  import { formValidation } from './property-detail.validations';
  // Importamos history para poder traernos el método que trae el id de la url
  import { history } from '../../core/router';
  import { getProperty, getEquipmentsList } from '../../common/api/common.api';
  import { mapPropertyFromApiToViewModel } from './property-detail.mappers';
  import { setPropertyValues } from './property-detail.helpers';
  
  // Recuperar la propiedad de servidor según el id de la url
  const params = history.getParams();
  
  if (params.id === undefined) {
    // Si no hay id no habrá propiedad asociada, mostramos alert
    window.alert('Debe elegir una propiedad para ver sus características');
    // Volvemos a la página Listado de Propiedades para que el usuario elija
    const route = 'http://localhost:1234/pages/property-list/property-list.html';
    history.push(route);
    // Como hay id traemos los datos de la propiedad del servidor
  } else {
    // Llamamos a la propiedad y a la lista de equipamiento al mismo tiempo
    Promise.all([getProperty(params.id), getEquipmentsList()]).then(
      (resultList) => {
        // Al array resultante le hacemos un destructuring para obtener 2 diferentes
        const [apiProperty, equipmentsList] = resultList;
        // Crear mapper para cumplir con el modelo de la vista
        const property = mapPropertyFromApiToViewModel(
          apiProperty,
          equipmentsList
        );
        // Imprimimos en la página los valores traídos
        setPropertyValues(property);
      }
    );
  }
  
  // Creamos objeto para recoger info del usuario
  let contactForm = {
    email: '',
    message: '',
  };
  
  // Recuperar los valores del formulario de contacto
  onUpdateField('email', (event) => {
    const value = event.target.value;
    // Copio el objeto contactForm usando spread
    contactForm = {
      ...contactForm,
      // Modifico solo su propiedad email igualándola a value
      email: value,
    };
    // Crear validaciones necesarias de dicho formulario
    // Cada vez que se modifica el campo queremos que se ejecuten las validaciones
    formValidation.validateField('email', contactForm.email).then((result) => {
      onSetError('email', result);
    });
  });
  onUpdateField('message', (event) => {
    const value = event.target.value;
    contactForm = {
      ...contactForm,
      message: value,
    };
    formValidation
      .validateField('message', contactForm.message)
      .then((result) => {
        onSetError('message', result);
      });
  });
  
  // Método para vaciar formulario
  const clearContactForm = (contactForm) => {
    contactForm = {
      ...contactForm,
      email: '',
      message: '',
    };
    return onSetValues(contactForm);
  };
  
  // Crear método post para enviar info del formulario
  onSubmitForm('contact-button', () => {
    // También validamos el formulario entero
    formValidation.validateForm(contactForm).then((result) => {
      onSetFormErrors(result);
      // Si no hay ningún error, lo siguiente sería mandar esos datos al servidor usando axios
      if (result.succeeded) {
        onPost(contactForm).then(() => {
          window.alert('Mensaje enviado con éxito');
          // Cuando guarda los datos vaciamos los campos por si quisieran mandar otro mensaje
          clearContactForm(contactForm);
        });
      }
    });
  });
  