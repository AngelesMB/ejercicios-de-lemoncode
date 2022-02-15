import { isExists } from 'date-fns';
const validatorType = 'MY_DATE_VALIDATOR';

export const myDateValidator = (fieldValidatorArgs) => {
  const year = parseInt(fieldValidatorArgs.values.year);
  // Necesitamos el -1 porque los meses van del 0 al 11 y no del 1 al 12   
  const month = parseInt(fieldValidatorArgs.values.month)-1;
  const day = parseInt(fieldValidatorArgs.values.day);
  const validationResult = {
    succeeded: false,
    type: validatorType,
    message: 'La fecha indicada no existe',
  };
  if (isExists(year, month, day)) {
    validationResult.succeeded = true;
    validationResult.message = '';
  }
  return validationResult;
};
