import { readContacts } from '../utils/readContacts';  

const getAllContacts = () => {  
    const contacts = readContacts();  
    console.log(contacts);  
};  

getAllContacts();