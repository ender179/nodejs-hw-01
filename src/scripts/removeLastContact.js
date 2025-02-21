import { writeContacts } from '../utils/writeContacts';  
import { readContacts } from '../utils/readContacts';  

const removeLastContact = () => {  
  const contacts = readContacts();  

  if (contacts.length > 0) {  
    contacts.pop();  // Вилучає останній контакт  
    writeContacts(contacts);  
    console.log('Останній контакт видалено.');  
  } else {  
    console.log('Немає контактів для видалення.');  
  }  
};  

export default removeLastContact;