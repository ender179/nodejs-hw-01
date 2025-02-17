import { createFakeContact } from '../utils/createFakeContact.js';  
import readContacts from '../utils/readContacts.js';  
import writeContacts from '../utils/writeContacts.js';  
import fs from 'fs';  

function generateContacts(count) {  
    try {  
        const contacts = readContacts();  

        for (let i = 0; i < count; i++) {  
            contacts.push(createFakeContact());  
        }  

        writeContacts(contacts);  
        console.log(`${count} контактів успішно згенеровано та додано!`);  
    } catch (error) {  
        console.error(`Сталася помилка: ${error.message}`);  
    }  
}  

const count = parseInt(process.argv[2], 10);  

if (isNaN(count) || count <= 0) {  
    console.error("Будь ласка, введіть коректну кількість контактів для генерації.");  
    process.exit(1);  
}  

generateContacts(count);