import {
  onUpdateField,
  onSubmitForm,
  onSetError,
  onSetFormErrors,
  onSetValues,
} from '../../common/helpers/element.helpers';
import { formValidation } from './account.validations';
// Importamos history para poder traernos el método que trae el id de la url
import { history } from '../../core/router';
import { updateAccount, insertAccount } from './account.api';
import { getAccount } from "../../common/api/common.api";
import {
  mapAccountFromApiToViewModel,
  mapAccountFromViewModelToApi,
} from './account.mappers';

/* Necesitamos crear 3 métodos de api
    post insertar nueva cuenta
    get obtener los datos actuales mediante id
    put actualizar la cuenta
    */

const params = history.getParams();
// Verificamos si el id tiene valor (modo edición, ya existe el id) o si es false (no existe, vamos a crear un id nuevo)
const isEditMode = Boolean(params.id); // es igual al ternario = params.id ? true : false

if (isEditMode) {
  // Como la cuenta ya existe, traemos los datos de la cuenta del servidor
  getAccount(params.id).then((apiAccount) => {
    account = mapAccountFromApiToViewModel(apiAccount);
    // Para que imprima en la página los valores traídos (con el método onSetValues
    // asignamos los valores de servidor a los elementos HTML)
    onSetValues(account);
  });
}

// Creamos objeto para recoger info del usuario
let account = {
  id: '',
  type: '',
  alias: '',
};

// Llamamos al método para recoger los datos
onUpdateField('type', (event) => {
  const value = event.target.value;
  // Copio el objeto account usando spread
  account = {
    ...account,
    // Modifico solo su propiedad type igualándola a value
    type: value,
  };
  // Cada vez que se modifica el campo queremos que se ejecuten las validaciones
  formValidation.validateField('type', account.type).then((result) => {
    onSetError('type', result);
  });
});
onUpdateField('alias', (event) => {
  const value = event.target.value;
  // Copio el objeto account usando spread
  account = {
    ...account,
    // Modifico solo su propiedad alias igualándola a value
    alias: value,
  };
  // Cada vez que se modifica el campo queremos que se ejecuten las validaciones
  formValidation.validateField('alias', account.alias).then((result) => {
    onSetError('alias', result);
  });
});

// Una vez que el usuario ha cambiado los valores o editamos o creamos
const onSave = () => {
  // Primero volvemos a transformar los datos del usuario al formato del back (name vs alias)
  const apiAccount = mapAccountFromViewModelToApi(account);
  // Diferentes métodos de la api para actualizar o insertar según si isEditMode devuelve true o false
  return isEditMode ? updateAccount(apiAccount) : insertAccount(apiAccount);
};

onSubmitForm('save-button', () => {
  // También validamos el formulario entero
  formValidation.validateForm(account).then((result) => {
    onSetFormErrors(result);
    // Si no hay ningún error, lo siguiente sería mandar esos datos al servidor usando axios
    if (result.succeeded) {
      onSave().then((apiAccount) => {
        // Cuando guarda los datos volvemos a la página anterior
        history.back();
      });
    }
  });
});
