## Listado de clientes

El objetivo del laboratorio de este módulo es dividir la funcionalidad de una aplicación en varios ficheros. La
aplicación muestra en un documento HTML un listado de clientes de un banco, con sus cuentas (saldo y
número IBAN).

La aplicación de partida viene ya creada, y sólo se compone de dos ficheros: HTML (index.html) y Javascript
(index.js). Debemos romper el fichero index.js en varios, agrupando por funcionalidad.

Tendremos que tener al finalizar el laboratorio los siguientes ficheros javascript:

- account-business.js
- client-business.js
- client-list-business.js
- data-business.js
- index.js
- style-business.js

Además, el fichero index.html solo importará con la etiqueta script a index.js.

En el propio fichero index.js están separadas las funciones por comentarios para saber en qué fichero hay
que colocarlas:
```
account-business.js: -- getClientAccountsElement -- getAccountElement
client-business.js: -- getClientElement -- getClientNode -- getFullName
client-list-business.js: -- printClientsAccounts
data-business.js: -- getAccounts -- getClients
style-business.js: -- getNodeStyle
```
El fichero index.js terminará sólo con el siguiente contenido, más los imports que necesite:
```
window.onload = function() {
 printClientsAccounts();
};
```
Para completar el laboratorio con la entrega obligatoria, se deberá realizar el ejercicio descrito en alguna de
las formas de separar ficheros vistas en el módulo. Para completar el laboratorio con ejercicio extra, se
deberá entregar dos de las formas de separar funcionalidad en ficheros.
