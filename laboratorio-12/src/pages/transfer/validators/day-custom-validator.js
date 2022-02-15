const validatorType = 'MY_DAY_VALIDATOR';

export const myDayValidator = (fieldValidatorArgs) => {
  const { value } = fieldValidatorArgs;
  const parsedValue = parseInt(value);
  const validationResult = {
    succeeded: false,
    type: validatorType,
    message: 'Día no válido',
  };
  if (parsedValue > 0 && parsedValue <= 31) {
    validationResult.succeeded = true;
    validationResult.message = '';
  }
  return validationResult;
};
