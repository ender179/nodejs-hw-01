import { writeContacts } from '../utils/readContacts';  

const removeAllContacts = () => {  
    writeContacts([]); 
};  

export default removeAllContacts;