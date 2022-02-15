// En este fichero irá toda la info de las validaciones de los campos
// Lo primero importamos la librería Fonk
import { Validators, createFormValidation } from '@lemoncode/fonk';
import { iban } from '@lemoncode/fonk-iban-validator';
import { laterDate } from '@lemoncode/fonk-later-date-validator';
import { myDateValidator } from "./validators/date-custom-validator";
import { positiveNumber } from '@lemoncode/fonk-positive-number-validator';
import { myDayValidator } from './validators/day-custom-validator';
import { myMonthValidator } from './validators/month-custom-validator';
import { myYearValidator } from './validators/year-custom-validator';

// Creamos un schema de validación que luego aplicaremos a cada campo
const validationSchema = {
  field: {
    iban: [
      {
        validator: iban.validator,
        message: 'El formato del IBAN no es correcto',
      },
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    name: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    amount: [
      {
        validator: positiveNumber.validator,
        message: 'El número introducido no es correcto',
      },
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    concept: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    day: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      { validator: myDayValidator },
    ],
    month: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      { validator: myMonthValidator },
    ],
    year: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      { validator: myYearValidator },
    ],
    date: [
      {
        validator: laterDate.validator,
        customArgs: {
          parseStringToDateFn: (value) => new Date(value),
          date: new Date(),
        },
        message: 'Introduce una fecha a partir de hoy',
      },
      { validator: myDateValidator },
    ],
    email: [
      {
        validator: Validators.email,
        message: 'Email no válido',
      },
    ],
  },
};

export const formValidation = createFormValidation(validationSchema);
