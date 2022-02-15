// ES6
// import * as ClientListBusiness from "./client-list-business";

// COMMON JS
const ClientListBusiness = require("./client-list-business");

window.onload = function () {
  ClientListBusiness.printClientsAccounts();
};
