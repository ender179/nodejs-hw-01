import { existsSync, readFileSync } from 'fs';  
import PATH_DB from '../constants/contacts';  

const readContacts = () => {  
    if (!existsSync(PATH_DB)) {  
        return []; // Якщо файлу немає, повертаємо пустий масив  
    }  

    const data = readFileSync(PATH_DB);  
    return JSON.parse(data);  
};  

export default readContacts;