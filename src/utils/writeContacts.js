import { promises as fs } from 'fs';

async function writeContacts(contacts) {
    try {
        await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
    } catch (error) {
        console.error('Error writing contacts:', error);
    }
}

export default writeContacts;
