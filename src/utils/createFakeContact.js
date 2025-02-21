import { string, person, phone as _phone, internet } from '@faker-js/faker';  

function createFakeContact() {  
    return {  
        id: string.uuid(),  
        name: person.fullName(),  
        phone: _phone.phoneNumber(), 
        email: internet.email(),  
        job: person.jobTitle(),  
    };  
}  

function createFakeContacts(count) {  
    return Array.from({ length: count }, () => createFakeContact());  
}  

const contacts = createFakeContacts(5);  
console.log(contacts);  

export default createFakeContact;  
export { createFakeContacts };