// Funcionalidad de comunicación con su API

function getCharacters() {
  return fetch("https://www.breakingbadapi.com/api/characters").then(
    (response) => {
      // El fetch nos devolverá un promise con los datos en formato json
      return response.json();
    }
  );
}

function getCharactersByQuote(id) {
  return fetch("https://www.breakingbadapi.com/api/quotes/" + id).then(
    (response) => {
      // El fetch nos devolverá un promise con los datos en formato json
      return response.json();
    }
  );
}

export { getCharacters, getCharactersByQuote };
