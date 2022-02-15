const validatorType = 'MY_MONTH_VALIDATOR';

export const myMonthValidator = (fieldValidatorArgs) => {
  const { value } = fieldValidatorArgs;
  const parsedValue = parseInt(value);
  const validationResult = {
    succeeded: false,
    type: validatorType,
    message: 'Mes no válido',
  };
  if (parsedValue > 0 && parsedValue <= 12) {
    validationResult.succeeded = true;
    validationResult.message = '';
  }
  return validationResult;
};
