const fs = require('fs');  
const path = require('path');  

const dbPath = path.join(__dirname, '../db/db.json');  
const { generateFakeContact } = require('./utils');  

function generateContacts() {  
    const newContacts = [];  
    for (let i = 0; i < 5; i++) {  
        newContacts.push(generateFakeContact());  
    }  

    fs.readFile(dbPath, 'utf-8', (err, data) => {  
        if (err) throw err;  
        const jsonData = JSON.parse(data);  
        jsonData.push(...newContacts);  

        fs.writeFile(dbPath, JSON.stringify(jsonData, null, 2), (err) => {  
            if (err) throw err;  
            console.log('5 нових контактів додано.');  
        });  
    });  
}  

generateContacts();