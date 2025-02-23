import writeContacts from '../utils/writeContacts';  
import readContacts from '../utils/readContacts';  
import createFakeContact from '../utils/createFakeContact';  

async function generateContacts(count) {  
    const contacts = await readContacts();  
    for (let i = 0; i < count; i++) {  
        contacts.push(createFakeContact());  
    }  
    await writeContacts(contacts);  
}  

const count = process.argv[2] || 5; 
generateContacts(Number(count));