const fs = require('fs');  
const path = require('path');  

const dbPath = path.join(__dirname, '../db/db.json');  

function countContacts() {  
    fs.readFile(dbPath, 'utf-8', (err, data) => {  
        if (err) throw err;  
        const jsonData = JSON.parse(data);  
        console.log(`Кількість контактів: ${jsonData.length}`);  
    });  
}  

countContacts();