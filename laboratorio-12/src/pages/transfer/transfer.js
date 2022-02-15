// Página para consultar los movimientos de una cuenta.
// Imports
import { history } from '../../core/router';
import { getAccountList } from '../../common/api/common.api';
import {
  onUpdateField,
  onSubmitForm,
  onSetError,
  onSetFormErrors,
} from '../../common/helpers/element.helpers';
import { formValidation } from './transfer.validations';
import { setAccountOptions } from './transfer.helpers';
import { onPost } from './transfer.api';

// Recoger parámetros de la url para ver el id de cuenta.
const params = history.getParams();

// Pedimos todas las cuentas al servidor para el select de "Selecciona cuenta de origen"
getAccountList().then((accountList) => {
  // También pasamos el id de la cuenta seleccionada para que coja su opción en el select
  setAccountOptions(accountList, params.id);
});

// Creamos objeto para recoger info del usuario
let transfer = {
  id: '',
  iban: '',
  name: '',
  amount: '',
  concept: '',
  notes: '',
  day: '',
  month: '',
  year: '',
  email: '',
};

// Llamamos al método para recoger los valores del formulario
onUpdateField('select-account', (event) => {
  const value = event.target.value;
  // Copio el objeto transfer usando spread
  transfer = {
    ...transfer,
    // Modifico solo su propiedad id igualándola a value
    id: value,
  };
});
// Hacemos lo mismo para todos los demás campos
onUpdateField('iban', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    iban: value,
  };
  // Añadir validaciones a los campos.
  // Cada vez que se modifica el campo queremos que se ejecuten las validaciones
  formValidation.validateField('iban', transfer.iban).then((result) => {
    onSetError('iban', result);
  });
});
onUpdateField('name', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    name: value,
  };
  formValidation.validateField('name', transfer.name).then((result) => {
    onSetError('name', result);
  });
});
onUpdateField('amount', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    amount: value,
  };
  formValidation.validateField('amount', transfer.amount).then((result) => {
    onSetError('amount', result);
  });
});
onUpdateField('concept', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    concept: value,
  };
  formValidation.validateField('concept', transfer.concept).then((result) => {
    onSetError('concept', result);
  });
});
onUpdateField('notes', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    notes: value,
  };
});
onUpdateField('day', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    day: value,
    date: `${transfer.year}/${transfer.month}/${value}`,
  };
  formValidation.validateField('day', transfer.day).then((result) => {
    onSetError('date', result);
  });
});
onUpdateField('month', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    month: value,
    date: `${transfer.year}/${value}/${transfer.day}`,
  };
  formValidation.validateField('month', transfer.month).then((result) => {
    onSetError('date', result);
  });
});
onUpdateField('year', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    year: value,
    date: `${value}/${transfer.month}/${transfer.day}`,
  };
  formValidation.validateField('year', transfer.year).then((result) => {
    onSetError('date', result);
  });
});
onUpdateField('email', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    email: value,
  };
  formValidation.validateField('email', transfer.email).then((result) => {
    onSetError('email', result);
  });
});

// Mandar la información al servidor mediante un método de la API
onSubmitForm('transfer-button', () => {
  // También validamos el formulario entero
  formValidation.validateForm(transfer).then((result) => {
    onSetFormErrors(result);
    // Si no hay ningún error, lo siguiente sería mandar esos datos al servidor usando axios
    if (result.succeeded) {
      onPost(transfer).then(() => {
        window.alert('Transferencia realizada con éxito');
        // Cuando guarda los datos volvemos a la página Mis Cuentas
        const route ='http://localhost:1234/pages/account-list/account-list.html';
        history.push(route);
      });
    }
  });
});
