const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'db', 'db.json');

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Ошибка чтения файла:', err);
    return;
  }

  let contacts = [];
  try {
    contacts = JSON.parse(data);
  } catch (parseErr) {
    console.error('Ошибка парсинга JSON:', parseErr);
  }

  console.log(`Количество контактов: ${contacts.length}`);
});