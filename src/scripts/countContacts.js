import fs from 'fs';  
import path from 'path';  
import readContacts from '../utils/readContacts.js';  

const dbPath = path.join(__dirname, '../db/db.json');  

function generateContact() {  
    return {  
        id: Date.now(),   
        name: `Contact ${Math.floor(Math.random() * 1000)}`, 
        phone: `${Math.floor(Math.random() * 10000000000)}`, 
    };  
}  

function addContact(contact) {  
    const contacts = readContacts(); 
    contacts.push(contact);  
    fs.writeFileSync(dbPath, JSON.stringify(contacts, null, 2));  
}  

const newContact = generateContact();   
addContact(newContact); 

function countContacts() {  
    const contacts = readContacts();  
    console.log('Total contacts:', contacts.length);  
}  

countContacts(); 