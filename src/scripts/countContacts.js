const { readContacts } = require('../utils/readContacts');  

const countContacts = () => {  
    const contacts = readContacts();  
    console.log(contacts.length);  
};  

countContacts();