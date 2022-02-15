// En este fichero irá toda la info de las validaciones de los campos
// Lo primero importamos la librería Fonk
import { Validators, createFormValidation } from '@lemoncode/fonk';

// Creamos un schema de validación que luego aplicaremos a cada campo
const validationSchema = {
  field: {
    type: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    alias: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
  },
};

export const formValidation = createFormValidation(validationSchema);
