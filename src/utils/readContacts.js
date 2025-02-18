import { readFileSync } from 'fs';  
import path from 'path';  
import { PATH_DB } from '../constants.js';  

function readContacts() {  
    try {  
        const data = readFileSync(PATH_DB, 'utf-8');  
        return JSON.parse(data);  
    } catch (error) {  
        console.error('Error reading contacts:', error);  
        return [];  
    }  
}  

export default readContacts;