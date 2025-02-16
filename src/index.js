const generateContacts = require('./src/scripts/generateContacts');
const addOneContact = require('./src/scripts/addOneContact');
const getAllContacts = require('./src/scripts/getAllContacts');
const countContacts = require('./src/scripts/countContacts');
const removeAllContacts = require('./src/scripts/removeAllContacts');
const removeLastContact = require('./src/scripts/removeLastContact');

generateContacts(5); 
addOneContact(); 
console.log(getAllContacts()); 
console.log(countContacts()); 
removeLastContact(); 
removeAllContacts(); 