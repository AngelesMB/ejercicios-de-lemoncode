// Método que mapea el account de la api para el modelo vista
export const mapAccountFromApiToViewModel = (account) => {
  return {
    ...account,
    alias: account.name,
    balance: `${account.balance} €`
  };
};
// Necesitamos también el mapper inverso, de view model a la api, de lo que rellena el usuario al 'back'
export const mapAccountFromViewModelToApi = (account) => {
  return {
    ...account,
    name: account.alias,
    balance: parseInt(account.balance), 
  };
};
