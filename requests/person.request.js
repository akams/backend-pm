var requestManager    = require('../server/request-manager');

function getPersons(connection, response) {
  var query = "SELECT * FROM person";
  requestManager.queryDb(connection, query, response);
}

module.exports = {
  getPersons: getPersons
}
