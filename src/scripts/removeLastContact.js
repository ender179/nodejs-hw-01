import writeContacts from '../utils/writeContacts';  
import readContacts from '../utils/readContacts';  

async function removeLastContact() {  
    const contacts = await readContacts();  
    if (contacts.length > 0) {  
        contacts.pop();  
        await writeContacts(contacts);  
    }  
}  

removeLastContact();