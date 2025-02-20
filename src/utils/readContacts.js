const fs = require('fs');  
const { PATH_DB } = require('../constants/contacts');  

const readContacts = () => {  
    if (!fs.existsSync(PATH_DB)) {  
        return [];  
    }  
    const data = fs.readFileSync(PATH_DB);  
    return JSON.parse(data);  
};  

module.exports = { readContacts };