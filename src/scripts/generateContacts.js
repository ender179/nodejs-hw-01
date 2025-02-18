import createFakeContact from '../utils/createFakeContact';  
import writeContacts from '../utils/writeContacts';  
import readContacts from '../utils/readContacts';  

function generateContacts() {  
    const currentContacts = readContacts();  
    const newContacts = Array.from({ length: 5 }, () => createFakeContact());  
    writeContacts([...currentContacts, ...newContacts]);  
    console.log('5 нових контактів додано.');  
}  

generateContacts();