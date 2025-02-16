const fs = require('fs');  
const path = require('path');  

function readContacts() {  
  const data = fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf-8');  
  return JSON.parse(data);  
}  

module.exports = readContacts;