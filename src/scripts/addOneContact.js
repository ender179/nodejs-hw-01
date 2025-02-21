import { createFakeContact } from '../utils/createFakeContact';  
import { readContacts, writeContacts } from '../utils/readContacts';  

const addOneContact = () => {  
    const contacts = readContacts();  
    contacts.push(createFakeContact());  
    writeContacts(contacts);  
};  

export default addOneContact;