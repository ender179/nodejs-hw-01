const fs = require('fs');  
const path = require('path');  

const dbPath = path.join(__dirname, '../db/db.json');  
const { generateFakeContact } = require('./utils');  

function addOneContact() {  
    const newContact = generateFakeContact();  

    fs.readFile(dbPath, 'utf-8', (err, data) => {  
        if (err) throw err;  
        const jsonData = JSON.parse(data);  
        jsonData.push(newContact);  

        fs.writeFile(dbPath, JSON.stringify(jsonData, null, 2), (err) => {  
            if (err) throw err;  
            console.log('1 новий контакт додано.');  
        });  
    });  
}  

addOneContact();