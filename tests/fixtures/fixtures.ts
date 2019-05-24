import * as fs from 'fs';
import * as path from 'path';
export function getFixture(name: string) {
  const file = `./${name}.json`;
  return fs.readFileSync(path.resolve(__dirname, file), 'utf8');
}
