import writeContacts from '../utils/writeContacts';  

async function removeAllContacts() {  
    await writeContacts([]);  
}  

removeAllContacts();