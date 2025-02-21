import fs from 'fs';  
import path from 'path';  

const readContacts = () => {  
  const data = fs.readFileSync(path.join(__dirname, '../db/db.json'));  
  return JSON.parse(data);  
};  

export default readContacts;