import { generateFakeContacts } from '../utils/createFakeContact';  
import { readContacts, writeContacts } from '../utils/readContacts';  

const generateContacts = (num) => {  
    const existingContacts = readContacts();  
    const newContacts = generateFakeContacts(num);  
    const updatedContacts = [...existingContacts, ...newContacts];  
    writeContacts(updatedContacts);  
};  

export default generateContacts;