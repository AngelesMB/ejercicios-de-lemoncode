// Método que mapea cada elemento del array de movementList de la api para el modelo vista
const mapMovementFromApiToViewModel = (movement) => {
  return {
    balance: `${movement.balance} €`,
    amount: `${movement.amount} €`,
    description: movement.description,
    transaction: new Date(movement.transaction).toLocaleDateString(),
    realTransaction: new Date(movement.realTransaction).toLocaleDateString(),
  };
};
// Método que mapea el array de api a un array modelo vista con su modificación
export const mapMovementListFromApiToViewModel = (movementList) => {
  return movementList.map((movement) =>
    mapMovementFromApiToViewModel(movement)
  );
};
