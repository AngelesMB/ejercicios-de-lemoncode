// ES6
// import * as AccountBusiness from "./account-business";
// import * as DataBusiness from "./data-business";

// COMMON JS
const AccountBusiness = require("./account-business");
const DataBusiness = require("./data-business");

function getClientElement(client) {
  const allAccounts = DataBusiness.getAccounts();
  const clientAccounts = [];
  for (let account of allAccounts) {
    if (account.clientId === client.id) {
      clientAccounts.push(account);
    }
  }
  const node = getClientNode(client);
  const ul = AccountBusiness.getClientAccountsElement(clientAccounts);
  node.appendChild(ul);
  return node;
}

function getClientNode(client) {
  const li = document.createElement("li");
  li.append(getFullName(client));
  return li;
}
function getFullName(client) {
  return client.first_name + " " + client.last_name;
}

// ES6
// export { getClientElement };

// COMMON JS
module.exports = { getClientElement };
