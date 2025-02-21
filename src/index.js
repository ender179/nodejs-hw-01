import generateContacts from './scripts/generateContacts';  
import addOneContact from './scripts/addOneContact';  
import countContacts from './scripts/countContacts';  
import removeAllContacts from './scripts/removeAllContacts';  
import removeLastContact from './scripts/removeLastContact';  
import getAllContacts from './scripts/getAllContacts';  

// Генерує 5 контактів  
generateContacts(5);  

// Додає один контакт  
addOneContact();  

// Виводить всі контакти  
getAllContacts();  

// Виводить кількість контактів  
countContacts();  

// Вилучає останній контакт  
removeLastContact();  

// Вилучає всі контакти  
removeAllContacts();