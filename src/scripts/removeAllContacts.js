const { writeContacts } = require('../utils/writeContacts');  

const removeAllContacts = () => {  
    writeContacts([]);  
};  

removeAllContacts();