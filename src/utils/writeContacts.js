const fs = require('fs');
const PATH_DB = require('../constants/contacts').PATH_DB;

function writeContacts(data) {
  fs.writeFileSync(PATH_DB, JSON.stringify(data, null, 2));
}

module.exports = writeContacts;