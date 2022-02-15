## Reserva de hotel

Imaginemos que tenemos una web de reservas de hotel. Cuando un cliente realiza sus reservas indica los siguientes datos:
Qué habitaciones quiere (hay de varios tipos).

Para cada habitación, cuántas personas la van a ocupar.

Además, debemos saber que el tipo de IVA que aplica a las habitaciones de hotel es del 21%.

Nuestro objeto es calcular el subtotal (precio sin IVA) y el total de las reservas que ha hecho un cliente.

**Caso 1**

En el caso de un cliente particular:
- Habitación / día (IVA No Incluido):
- Standard: 100 €.
- Suite: 150 €.
Cargos adicionales:
- Por cada persona adicional sumarle 40 € al precio de cada noche.
- IVA sumarle un 21% al total.
Crear una clase que reciba la lista de reservas y calcule el subtotal y el total teniendo en cuenta los anteriores requisitos.

**Caso 2**

Cubrimos el caso de un tour operador, al reservar grandes volúmenes, le damos las siguientes condiciones especiales:
- Todas las habitaciones tienen el mismo precio (100 €).
- Adicionalmente se le aplica un 15 % de descuento a los servicios contratados.
Crear una clase que herede de la primera que cubra el caso del calculo de totales y subtotales para el tour operador