import { writeContacts } from '../utils/writeContacts';  

const removeAllContacts = () => {  
  writeContacts([]);  
  console.log('Всі контакти видалено.');  
};  

export default removeAllContacts;