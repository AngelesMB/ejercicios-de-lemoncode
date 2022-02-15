// Método que mapea cada elemento del array de accountList de la api para el modelo vista
const mapAccountFromApiToViewModel = (account) => {
  return {
    id: account.id,
    iban: account.iban,
    name: account.name,
    balance: `${account.balance} €`,
    lastTransaction: new Date(account.lastTransaction).toLocaleDateString(),
  };
};
// Método que mapea el array de api a un array modelo vista con su modificación
export const mapAccountListFromApiToViewModel = (accountList) => {
  return accountList.map((account) => mapAccountFromApiToViewModel(account));
};
