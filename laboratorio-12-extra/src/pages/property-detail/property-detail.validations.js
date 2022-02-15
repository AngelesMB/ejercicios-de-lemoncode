// En este fichero irá toda la info de las validaciones de los campos
// Lo primero importamos la librería Fonk
import { Validators, createFormValidation } from '@lemoncode/fonk';

// Creamos un schema de validación que luego aplicaremos a cada campo
const validationSchema = {
  field: {
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
    message: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
  },
};

export const formValidation = createFormValidation(validationSchema);