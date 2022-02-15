// Importamos estilo
import "./styles.css";

// Importamos funcionalidades
import * as DataBusiness from "./data-business";
import * as Utils from "./utils";

DataBusiness.getCharacters().then((data) => {
  // Limpiamos el div root para borrar el "loading" y mostrar el listado 
  document.getElementById("root").innerText = "";
  // Listado de personajes = resultado del fetch a la api 
  const characters = data;
  const nodes = [];
  // Recorremos el listado y para cada personaje y su click realizamos una acción  
  for (let character of characters) {
    const node = Utils.createCharacterRow(character);
    node.onclick = function () {
      DataBusiness.getCharactersByQuote(character.char_id).then((dataQuote) => {
        // Pasamos a la función el resultado de ambos fetchs
        Utils.showCharacter(character, dataQuote);
      });
    };
    nodes.push(node);
  }
  // Añadimos cada elemento creado al div root   
  for (let node of nodes) {
    document.getElementById("root").append(node);
  }
});
