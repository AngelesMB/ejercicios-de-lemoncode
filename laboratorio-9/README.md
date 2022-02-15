## Breaking Bad App

Acabamos de recibir un encargo de Netflix. Quieren promocionar una de sus conocidas series, Breaking Bad,
y necesitan una pequeña aplicación creada con Javascript para mostrar información sobre sus personajes.

La aplicación debe mostrar un listado con la foto y nombre de los personajes (characters) de la serie. Al
hacer click sobre uno de ellos se mostrará más información acerca del mismo: foto, nombre, fecha de
nacimiento y apodo.

Según nos comentan, podemos recuperar los datos de su API. Nos envían esta documentación: The
Breaking Bad API

En esta documentación hemos podido ver que la ruta base de la api es
`"https://www.breakingbadapi.com/api/"`, y tenemos disponibles los siguientes endpoints:

- Recuperar todos los personajes: /api/characters
- Recuperar un personaje: /api/characters/{char_id}

Para crear el listado y el detalle, nos facilitan un fichero utils.js del que nos detallan que debemos utilizar la
siguiente funcionalidad:

- createCharacter: debemos utilizar esta función para que nos devuelva un elemento HTML con la fila
del personaje que recibe por parámetro.
- showCharacter: debemos utilizarla para que nos muestre el detalle del personale que recibe por
parámetro.
