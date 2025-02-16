import fs from 'fs';  
import path from 'path';  

const dbPath = path.join(__dirname, '../db/db.json');  

const removeAllContacts = () => {  
    const emptyContacts = { contacts: [] };  

    fs.writeFile(dbPath, JSON.stringify(emptyContacts, null, 2), (err) => {  
        if (err) {  
            console.error('Не вдалося видалити контакти:', err);  
            return;  
        }  
        console.log('Усі контакти були успішно видалені.');  
    });  
};  

removeAllContacts();