import assert = require('power-assert');
import * as path from 'path';
import { parse, getFieldMeta } from '../src/index';
import { iTestInterfaceFieldMeta } from './fixtures/fixtures';
import {
  localeProviderPropsFieldMeta,
  localeProviderPropsBaseMeta,
  localeProviderPropsChineseMeta
} from './fixtures/module';

const iTestInterfaceFixtures = path.resolve(
  __dirname,
  './fixtures/fixtures.tsx'
);

const moduleInterface = path.resolve(__dirname, './fixtures/module.tsx');

describe('test index.ts', () => {
  describe('test parse function', () => {
    it('should return meta', () => {
      assert.deepEqual(
        parse(iTestInterfaceFixtures, 'ITestInterface'),
        iTestInterfaceFieldMeta
      );
    });
    it('should return null when interface is not exist', () => {
      assert.equal(parse(iTestInterfaceFixtures, 'NotExist'), null);
    });
    it('should support module', () => {
      assert.deepEqual(
        parse(moduleInterface, 'LocaleProviderProps'),
        localeProviderPropsFieldMeta
      );
    });
  });

  describe('test getFieldMeta', () => {
    const fields = parse(moduleInterface, 'LocaleProviderProps');

    it('should return baseMeta when language is empty ', () => {
      assert.deepEqual(
        fields.map(o => getFieldMeta(o)),
        localeProviderPropsBaseMeta
      );
      assert.deepEqual(
        fields.map(o => getFieldMeta(o, null)),
        localeProviderPropsBaseMeta
      );
      assert.deepEqual(
        fields.map(o => getFieldMeta(o, 'error')),
        localeProviderPropsBaseMeta
      );
    });
    it('should return zh-CN meta when language is zh-CN', () => {
      assert.deepEqual(
        fields.map(o => getFieldMeta(o, 'zh-CN')),
        localeProviderPropsChineseMeta
      );
    });
  });
});
