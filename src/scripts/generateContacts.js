import { writeContacts } from '../utils/writeContacts';  
import { readContacts } from '../utils/readContacts';  
import createFakeContact from '../utils/createFakeContact';  

const generateContacts = (num) => {  
  const contacts = readContacts();  

  for (let i = 0; i < num; i++) {  
    contacts.push(createFakeContact());  
  }  

  writeContacts(contacts);  
};  

export default generateContacts;