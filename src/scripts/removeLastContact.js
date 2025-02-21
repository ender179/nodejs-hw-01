import { readContacts, writeContacts } from '../utils/readContacts';  

const removeLastContact = () => {  
    const contacts = readContacts();  
    if (contacts.length > 0) {  
        contacts.pop(); 
        writeContacts(contacts);  
    }  
};  

export default removeLastContact;