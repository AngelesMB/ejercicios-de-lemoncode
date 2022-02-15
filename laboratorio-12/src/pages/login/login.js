// Importamos funcionalidades del fichero helpers y otros
import {
  onUpdateField,
  onSubmitForm,
  onSetError,
  onSetFormErrors,
} from '../../common/helpers/element.helpers';
import { isValidLogin } from './login.api';
import { formValidation } from './login.validations';
import { history, routes } from '../../core/router';

// Guardamos en un objeto la info recogida del usuario en el formulario login
let login = {
  user: '',
  password: '',
};

// Llamamos al método para recoger los datos
onUpdateField('user', (event) => {
  const value = event.target.value;
  // Copio el objeto login usando spread
  login = {
    ...login,
    // Modifico solo su propiedad user igualándola a value
    user: value,
  };
  // Otra opción menos óptima
  //   login.user = value;
  // Cada vez que se modifica el campo también queremos que se ejecuten las validaciones
  formValidation.validateField('user', login.user).then((result) => {
    onSetError('user', result);
  });
});
// Hacemos lo mismo para el campo password
onUpdateField('password', (event) => {
  const value = event.target.value;
  login = {
    ...login,
    password: value,
  };
  formValidation.validateField('password', login.password).then((result) => {
    onSetError('password', result);
  });
});

// Creamos un método para navegar a la siguiente página si los campos son correctos
const onNavigate = (isValid) => {
  if (isValid) {
    history.push(routes.accountList);
  } else {
    alert('Usuario y/o contraseña no válidos');
  }
};

// Llamamos al método que capta el click del botón submit
onSubmitForm('login-button', () => {
  // También validamos el formulario entero
  formValidation.validateForm(login).then((result) => {
    onSetFormErrors(result);
    // Si no hay ningún error, lo siguiente sería mandar esos datos al servidor usando axios
    if (result.succeeded) {
      isValidLogin(login).then((isValid) => {
        onNavigate(isValid);
      });
    }
  });
});
