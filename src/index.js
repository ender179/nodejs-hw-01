import generateContacts from './src/scripts/generateContacts';
import addOneContact from './src/scripts/addOneContact';
import getAllContacts from './src/scripts/getAllContacts';
import countContacts from './src/scripts/countContacts';
import removeAllContacts from './src/scripts/removeAllContacts';
import removeLastContact from './src/scripts/removeLastContact';

generateContacts(5); 
addOneContact(); 
console.log(getAllContacts()); 
console.log(countContacts()); 
removeLastContact(); 
removeAllContacts(); 