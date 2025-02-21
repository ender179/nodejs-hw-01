import { readContacts } from '../utils/readContacts';  

const countContacts = () => {  
    const contacts = readContacts();  
    console.log(contacts.length);  
};  

export default countContacts;