const validatorType = 'MY_YEAR_VALIDATOR';

export const myYearValidator = (fieldValidatorArgs) => {
  const { value } = fieldValidatorArgs;
  const parsedValue = parseInt(value);
  const validationResult = {
    succeeded: false,
    type: validatorType,
    message: 'Fecha máxima para realizar transferencias: diciembre del 2023',
  };
  if (parsedValue >= 2021 && parsedValue <= 2023) {
    validationResult.succeeded = true;
    validationResult.message = '';
  }
  return validationResult;
};
