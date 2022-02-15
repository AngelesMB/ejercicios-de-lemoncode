// Vamos a recuperar la información de servidor
import { getAccountList } from '../../common/api/common.api';
import { addAccountRows } from './account-list.helpers';
import { mapAccountListFromApiToViewModel } from './account-list.mappers';
import { onUpdateField } from '../../common/helpers';
import { history } from '../../core/router';

getAccountList().then((accountList) => {
  // Problema: los datos nos llegan en un formato diferente al que queremos
  /*
  Account  {
      id: string:
      iban: string;
      name: string;
      balance: llega number > queremos string y €
      lastTransaction: llega string con fecha larga > queremos DD/MM/YYYY
    }
   Necesitamos entonces un mappeador
   */
  const viewModelAccountList = mapAccountListFromApiToViewModel(accountList);
  // Pintamos cada fila con la info que llega del array accountList
  addAccountRows(viewModelAccountList);
  // Ahora quiero que el usuario sea capaz de seleccionar hacia dónde navegar
  // (movimientos o transferencias) con el select
  viewModelAccountList.forEach((account) => {
    // Cada vez que el usuario cambia el valor del select se dirige a una página diferente
    onUpdateField(`select-${account.id}`, (event) => {
      const route = event.target.value;
      history.push(route);
    });
  });
});
