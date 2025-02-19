const fs = require('fs');
const path = require('path');

// Функция для генерации случайного контакта
function generateContact() {
  return {
    id: Math.floor(Math.random() * 1000000),
    name: `User_${Math.floor(Math.random() * 1000)}`,
    email: `user${Math.floor(Math.random() * 1000)}@example.com`
  };
}

const filePath = path.join(__dirname, 'src', 'db', 'db.json');

// Чтение существующих контактов из файла
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

  // Добавляем 1 новый контакт
  contacts.push(generateContact());

  // Запись обновленного массива обратно в файл
  fs.writeFile(filePath, JSON.stringify(contacts, null, 2), err => {
    if (err) {
      console.error('Ошибка записи в файл:', err);
    } else {
      console.log('В файл добавлен 1 контакт.');
    }
  });
});
