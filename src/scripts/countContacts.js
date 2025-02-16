const readContacts = require('../utils/readContacts');

function countContacts() {
  const contacts = readContacts();
  return contacts.length;
}

module.exports = countContacts;