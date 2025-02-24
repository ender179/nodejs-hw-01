import readContacts from '../utils/readContacts';

async function getAllContacts() {
    const contacts = await readContacts();
    console.log(contacts);
}

getAllContacts();
