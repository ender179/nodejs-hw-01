import { createFakeContact } from '../utils/createFakeContact';  
import { readContacts } from '../utils/readContacts';  
import { writeContacts } from '../utils/writeContacts';  

const addOneContact = () => {  
    const contacts = readContacts();  
    contacts.push(createFakeContact());  
    writeContacts(contacts);  
};  

addOneContact();