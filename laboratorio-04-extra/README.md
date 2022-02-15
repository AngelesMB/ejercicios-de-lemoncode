## Reservas en un Hotel

Vamos a simular un formulario de reserva de un hotel. Para ello añade los siguientes inputs a tu HTML:

- Selector de tipo de habitación, a elegir entre Standard, Junior Suite y Suite (< select >)
- Checkbox para hacer uso del SPA o no (< input > tipo checkbox)
- Selector para indicar la ocupación de la habitación, a elegir entre Individual, Doble o Triple (< select >)
- Número de noches (< input > tipo número)
- Cuantas noches de parking se desea (< input > tipo número)
- Finalmente un botón de 'Calcular' para mostrar por pantalla el coste total de la estancia.

Para calcular el coste de la estancia ten en cuenta lo siguiente:

- La tarifa de la habitación por noche es de 100€ para categoría Standard, 120€ Junior Suite y 150€ Suite.
- El uso del SPA incrementa la tarifa anterior en 20€.
- Una vez tengas la tarifa en función de la categoría y el SPA, la ocupación (individual o triple) actúa como un factor de
decremento o incremento, siendo la opción de doble el estándar. Es decir, el uso individual reduce un 25% la tarifa por
noche, mientras que el uso triple la incrementa en un 25%. El uso doble la deja tal cual.
- Cada noche de parking suma 10€.
