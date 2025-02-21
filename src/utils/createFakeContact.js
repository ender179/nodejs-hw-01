import { faker } from '@faker-js/faker';  

const createFakeContact = () => ({  
    id: faker.datatype.uuid(),  
    name: faker.name.findName(),  
    phone: faker.phone.number(),  
    email: faker.internet.email(),  
    job: faker.name.jobTitle(),  
});  

const createFakeContacts = (count) => {  
    return Array.from({ length: count }, () => createFakeContact());  
};  

export { createFakeContact, createFakeContacts };