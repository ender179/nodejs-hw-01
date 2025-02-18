import { string, person, phone as _phone, internet } from '@faker-js/faker';  

function createFakeContact() {  
    return {  
        id: string.uuid(),  
        name: person.fullName(),  
        phone: _phone.number(),  
        email: internet.email(),  
        job: person.jobTitle(),  
    };  
}  

export default createFakeContact;