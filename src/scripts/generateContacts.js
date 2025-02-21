import { createFakeContact } from '../utils/createFakeContact';  
import { readContacts } from '../utils/readContacts';  
import { writeContacts } from '../utils/writeContacts';  

const generateContacts = (count) => {  
    const contacts = readContacts();  
    for (let i = 0; i < count; i++) {  
        contacts.push(createFakeContact());  
    }  
    writeContacts(contacts);  
};  

const count = parseInt(process.argv[2] || 0, 10);  
generateContacts(count);