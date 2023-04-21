import Path, { resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = Path.dirname(__filename);
const pages = [{ name: 'main', path: resolve(__dirname, '../index.html') }];

export default pages;
