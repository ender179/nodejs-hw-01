import { writeFileSync } from 'fs';  
import path from 'path';  
import { PATH_DB } from '../constants.js';  

function writeContacts(contacts) {  
    try {  
        writeFileSync(PATH_DB, JSON.stringify(contacts, null, 2));  
    } catch (error) {  
        console.error('Error writing contacts:', error);  
    }  
}  

export default writeContacts;