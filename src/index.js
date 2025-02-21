import generateContacts from './scripts/generateContacts';  
import addOneContact from './scripts/addOneContact';  
import countContacts from './scripts/countContacts';  
import removeAllContacts from './scripts/removeAllContacts';  
import removeLastContact from './scripts/removeLastContact';  
import getAllContacts from './scripts/getAllContacts';  

generateContacts(5); // Генерує 5 контактів  
addOneContact();     // Додає один контакт  
getAllContacts();    // Виводить всі контакти  
countContacts();     // Виводить кількість контактів  
removeLastContact(); // Видаляє останній контакт  
removeAllContacts(); // Видаляє всі контакти