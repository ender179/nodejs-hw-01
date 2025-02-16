const readContacts = require('../utils/readContacts');  

function getAllContacts() {  
  const contacts = readContacts();  
  console.log(contacts);  
}  

module.exports = getAllContacts;