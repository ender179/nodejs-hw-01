const writeContacts = require('../utils/writeContacts');

function removeAllContacts() {
  writeContacts([]);
}

module.exports = removeAllContacts;