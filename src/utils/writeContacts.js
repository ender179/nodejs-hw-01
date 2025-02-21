import { writeFileSync } from 'fs';  
import PATH_DB from '../constants/contacts';  

const writeContacts = (contacts) => {  
    writeFileSync(PATH_DB, JSON.stringify(contacts, null, 2));  
};  

export default writeContacts;