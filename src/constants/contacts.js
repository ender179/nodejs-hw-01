import { resolve, join } from 'path';  

const __dirname = resolve();  
const PATH_DB = join(__dirname, 'db/db.json');  

export default { PATH_DB };