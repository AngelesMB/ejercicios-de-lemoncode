// Página para consultar los movimientos de una cuenta.
// Imports
import { history } from '../../core/router';
import { getAccount } from '../../common/api/common.api';
import { mapAccountFromApiToViewModel } from '../../pages/account/account.mappers';
import { getMovementList } from './movements.api';
import { mapMovementListFromApiToViewModel } from './movements.mappers';
import { onSetValues } from '../../common/helpers/element.helpers';
import { addMovementRows } from './movements.helpers';

// Recoger parámetros de la url para ver el id de cuenta.
const params = history.getParams();

if (params.id === undefined) {
  // Si no hay id no habrá cuenta asociada ni movimientos, mostramos alert
  window.alert('Elija una cuenta para poder ver sus movimientos');
  // Volvemos a la página Mis Cuentas para que el usuario elija una cuenta
  const route = 'http://localhost:1234/pages/account-list/account-list.html';
  history.push(route);
} else {
  // Como hay id la cuenta ya existe > traemos los datos de la cuenta del servidor
  getAccount(params.id).then((apiAccount) => {
    const account = mapAccountFromApiToViewModel(apiAccount);
    // Para que imprima en la página los valores traídos (con el método onSetValues
    // asignamos los valores de servidor a los elementos HTML)
    onSetValues(account);
  });
}

// Recuperar los movimientos disponibles de esa cuenta.
getMovementList(params.id).then((movementList) => {
  // Problema: los datos nos llegan en un formato diferente al que queremos
  // Necesitamos entonces un mappeador
  const viewModelMovementList = mapMovementListFromApiToViewModel(movementList);
  // Pintamos cada fila con la info que llega de los movimientos
  addMovementRows(viewModelMovementList);
});
