// ES6
// import * as DataBusiness from "./data-business";
// import * as ClientBusiness from "./client-business";

// COMMON JS
const DataBusiness = require("./data-business");
const ClientBusiness = require("./client-business");

function printClientsAccounts() {
  const clients = DataBusiness.getClients();
  const ul = document.createElement("ul");
  for (let client of clients) {
    const element = ClientBusiness.getClientElement(client);
    ul.appendChild(element);
  }
  document.getElementById("root").appendChild(ul);
}

// ES6
// export { printClientsAccounts };

// COMMON JS
module.exports = { printClientsAccounts };