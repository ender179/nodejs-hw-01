import { readContacts } from '../utils/readContacts';  

const countContacts = () => {  
  const contacts = readContacts();  
  console.log(`Кількість контактів: ${contacts.length}`); // Виводимо кількість контактів  
};  

export default countContacts;