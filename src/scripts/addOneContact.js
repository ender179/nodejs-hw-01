import createFakeContact from '../utils/createFakeContact';  
import writeContacts from '../utils/writeContacts';  
import readContacts from '../utils/readContacts';  

function addOneContact() {  
    const currentContacts = readContacts();  
    const newContact = createFakeContact();  
    writeContacts([...currentContacts, newContact]);  
    console.log('1 новий контакт додано.');  
}  

addOneContact();