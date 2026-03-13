import fs from 'fs';
import path from 'path';

const cache = new Map();

export function readFragment(name) {
  if (cache.has(name)) return cache.get(name);
  const filePath = path.join(process.cwd(), 'content', `${name}.html`);
  const html = fs.readFileSync(filePath, 'utf8');
  cache.set(name, html);
  return html;
}


