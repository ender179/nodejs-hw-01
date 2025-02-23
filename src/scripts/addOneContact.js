import writeContacts from '../utils/writeContacts';  
import readContacts from '../utils/readContacts';  
import createFakeContact from '../utils/createFakeContact';  

async function addOneContact() {  
    const contacts = await readContacts();  
    contacts.push(createFakeContact());  
    await writeContacts(contacts);  
}  

addOneContact();