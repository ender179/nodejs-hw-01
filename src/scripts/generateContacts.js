const readContacts = require('../utils/readContacts');
const writeContacts = require('../utils/writeContacts');
const createFakeContact = require('../utils/createFakeContact');

async function generateContacts(num) {
    const contacts = await readContacts();
    for (let i = 0; i < num; i++) {
        contacts.push(createFakeContact());
    }
    await writeContacts(contacts);
}

generateContacts(5); 