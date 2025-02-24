const fs = require('fs').promises;

async function writeContacts(contacts) {
    try {
        await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
    } catch (error) {
        console.error('Error writing contacts:', error);
    }
}

module.exports = writeContacts;
