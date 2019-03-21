import * as path from 'path';
import * as fs from 'fs';
import { parse } from '../src/index';
import assert = require('power-assert');

const classFixtures = path.resolve(__dirname, './fixtures/fixtures.tsx');

const code = fs.readFileSync(classFixtures).toString();

describe('test index.ts', () => {
  it('should return null when pass empty interface name', () => {
    assert.equal(parse(code, ''), null);
  });
});
