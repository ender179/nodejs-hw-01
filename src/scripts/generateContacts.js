const fs = require('fs');
const path = require('path');

function generateContact() {
  return {
    id: Math.floor(Math.random() * 1000000),
    name: `User_${Math.floor(Math.random() * 1000)}`,
    email: `user${Math.floor(Math.random() * 1000)}@example.com`
  };
}

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

  for (let i = 0; i < 5; i++) {
    contacts.push(generateContact());
  }

  fs.writeFile(filePath, JSON.stringify(contacts, null, 2), err => {
    if (err) {
      console.error('Ошибка записи в файл:', err);
    } else {
      console.log('В файл добавлено 5 контактов.');
    }
  });
});