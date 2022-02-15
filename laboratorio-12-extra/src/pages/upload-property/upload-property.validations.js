// En este fichero irá toda la info de las validaciones de los campos
// Lo primero importamos la librería Fonk
import { Validators, createFormValidation } from '@lemoncode/fonk';
import { positiveNumber } from '@lemoncode/fonk-positive-number-validator';
import { arrayRequired } from '@lemoncode/fonk-array-required-validator';
import { isUrl } from '@lemoncode/fonk-is-url-validator';

// Creamos un schema de validación que luego aplicaremos a cada campo
const validationSchema = {
  field: {
    title: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    notes: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    email: [
      {
        validator: Validators.email,
        message: 'Email no válido',
      },
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    phone: [
      {
        validator: Validators.pattern,
        customArgs: { pattern: /^(6|7|9)\d{8}$/ },
        message: 'Introduzca un número de teléfono válido',
      },
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    address: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    city: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    province: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    squareMeter: [
      {
        validator: positiveNumber.validator,
        message: 'El número introducido no es correcto',
      },
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    price: [
      {
        validator: positiveNumber.validator,
        message: 'El número introducido no es correcto',
      },
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    saleTypes: [
      {
        validator: arrayRequired.validator,
        customArgs: { minLength: 1, maxLength: 4 },
        message: 'Marque al menos una casilla',
      },
    ],
    rooms: [
      {
        validator: positiveNumber.validator,
        message: 'El número introducido no es correcto',
      },
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    bathrooms: [
      {
        validator: positiveNumber.validator,
        message: 'El número introducido no es correcto',
      },
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    locationUrl: [
      {
        validator: isUrl.validator,
        message: 'Introduzca una URL válida',
      },
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    mainFeatures: [
      {
        validator: arrayRequired.validator,
        customArgs: { minLength: 1, maxLength: 4 },
        message: 'Añada al menos una característica',
      },
    ],
    images: [
      {
        validator: arrayRequired.validator,
        customArgs: { minLength: 1, maxLength: 4 },
        message: 'Añada al menos una imagen',
      },
    ],
  },
};

export const formValidation = createFormValidation(validationSchema);
