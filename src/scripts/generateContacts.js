import { createFakeContact } from '../utils/createFakeContact.js';  
import readContacts from '../utils/readContacts.js';  
import writeContacts from '../utils/writeContacts.js';  

function generateContacts(count) {  
    const contacts = readContacts();  
    
    for (let i = 0; i < count; i++) {  
        contacts.push(createFakeContact());  
    }  
    
    writeContacts(contacts);  
}  

const count = parseInt(process.argv[2]); 
generateContacts(count);