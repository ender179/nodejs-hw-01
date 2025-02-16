const fs = require('fs');  
const path = require('path');  

function generateRandomContact() {  
    const names = ['Іван', 'Марія', 'Петро', 'Олена'];  
    const randomName = names[Math.floor(Math.random() * names.length)];  
    const randomPhone = `+380${Math.floor(Math.random() * 1000000000)}`;  
    
    return {  
        name: randomName,  
        phone: randomPhone  
    };  
}  

const dbPath = path.join(__dirname, 'src/db/db.json');  

fs.readFile(dbPath, 'utf8', (err, data) => {  
    if (err) {  
        console.error('Помилка при читанні файлу:', err);  
        return;  
    }  

    try {  
        let contacts = JSON.parse(data);  

        const newContact = generateRandomContact();  

        contacts.push(newContact);  

        fs.writeFile(dbPath, JSON.stringify(contacts, null, 2), (err) => {  
            if (err) {  
                console.error('Помилка при записі файлу:', err);  
                return;  
            }  
            console.log('Новий контакт додано:', newContact);  
        });  
    } catch (parseError) {  
        console.error('Помилка при парсингу JSON:', parseError);  
    }  
});