import readContacts from '../utils/readContacts';
import writeContacts from '../utils/writeContacts';
import createFakeContact from '../utils/createFakeContact';

async function generateContacts(num) {
    const contacts = await readContacts();
    for (let i = 0; i < num; i++) {
        contacts.push(createFakeContact());
    }
    await writeContacts(contacts);
}

generateContacts(5); 