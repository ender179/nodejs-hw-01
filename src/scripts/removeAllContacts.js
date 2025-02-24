import readContacts from '../utils/readContacts';
import writeContacts from '../utils/writeContacts';

async function removeAllContacts() {
    await writeContacts([]);
}

removeAllContacts();
