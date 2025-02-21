import { writeContacts } from '../utils/writeContacts';  
import { readContacts } from '../utils/readContacts';  
import createFakeContact from '../utils/createFakeContact';  

const addOneContact = () => {  
  const contacts = readContacts();  
  contacts.push(createFakeContact());  
  writeContacts(contacts);  
};  

export default addOneContact;