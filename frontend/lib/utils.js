// File Purpose: Provides shared utility helpers for reading and caching local data sources.

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



