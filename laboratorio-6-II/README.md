## Enigma

El algoritmo de encriptación es sencillo. La transformación que vamos a aplicar a cada letra va a venir dada por:
```
var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";
```
De modo que:
- 'a' se encriptará como 'q'
- 'b' se encriptará como 'w'
- 'c' se encriptará como ','
y así sucesivamente

Implementa también la desencriptación, que es exactamente igual pero aplicando la transformación al revés:
- 'q' se desencriptará como 'a'
- 'w' se desencriptará como 'b'
etc

De esta forma, cuando el usuario introduzca un texto en claro y haga click en 'Encrypt', debería encriptarse el mensaje y mostrarse en el textarea inferior. Si por contra introduce un mensaje encriptado y presiona 'Decrypt', deberá desencriptarse el mensaje y mostrarse en el textarea superior.
