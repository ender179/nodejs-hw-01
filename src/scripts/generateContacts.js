const { createFakeContact } = require('../utils/createFakeContact');  
const { readContacts } = require('../utils/readContacts');  
const { writeContacts } = require('../utils/writeContacts');  

const generateContacts = (count) => {  
    const contacts = readContacts();  
    for (let i = 0; i < count; i++) {  
        contacts.push(createFakeContact());  
    }  
    writeContacts(contacts);  
};  

const count = parseInt(process.argv[2] || 0, 10);  
generateContacts(count);