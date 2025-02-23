import readContacts from '../utils/readContacts';  

async function countContacts() {  
    const contacts = await readContacts();  
    console.log(contacts.length);  
}  

countContacts();