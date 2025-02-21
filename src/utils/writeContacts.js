import fs from 'fs';  
import path from 'path';  

const writeContacts = (contacts) => {  
  fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(contacts, null, 2));  
};  

export default writeContacts;