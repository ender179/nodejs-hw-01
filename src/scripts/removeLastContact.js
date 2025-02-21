import readContacts from '../utils/readContacts'; 
import writeContacts from '../utils/writeContacts'; 

const removeLastContact = () => {  
    const contacts = readContacts();   

    if (contacts.length > 0) {  
        contacts.pop();   
        console.log("Последний контакт был удалён.");    
    } else {  
        console.log("Нет контактов для удаления.");    
    }  
    
    writeContacts(contacts); 
};  

removeLastContact(); 