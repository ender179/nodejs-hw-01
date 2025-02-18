import readContacts from '../utils/readContacts';  

function countContacts() {  
    const contacts = readContacts();  
    console.log(`Кількість контактів: ${contacts.length}`);  
}  

countContacts();