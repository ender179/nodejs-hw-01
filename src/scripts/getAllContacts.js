const readContacts = require('../utils/readContacts');

function getAllContacts() {
  return readContacts();
}

module.exports = getAllContacts;