import * as fs from 'fs';

export function getFixture(name: string) {
  const file = `/Users/barendt/code/vkbs/tests/unit/fixures/${name}.json`;
  return fs.readFileSync(file, 'utf8');
}
