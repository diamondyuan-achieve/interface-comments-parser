import { localeProviderPropsFieldMeta } from './fixtures/module';
import {
  readInterfaceAstByName,
  parserTsInterfaceDeclaration,
  getFieldMetaByLanguage
} from '../src/index';
import assert = require('power-assert');
import * as path from 'path';

describe('test transform/index.ts', () => {
  /**
   * 测试从 ts 文件中根据接口名称提取语法树
   */
  describe('test readInterfaceAstByName', () => {
    it('should return null when file not exist', () => {
      assert.equal(
        readInterfaceAstByName(
          path.resolve(__dirname, './fixtures/notExist.tsx'),
          'ITestInterface'
        ),
        null
      );
    });
    it('should return null when interface name is correct', () => {
      assert.equal(
        readInterfaceAstByName(
          path.resolve(__dirname, './fixtures/fixtures.tsx'),
          'error'
        ),
        null
      );
    });
    it('should support export exportNamedDeclaration', () => {
      assert.notEqual(
        readInterfaceAstByName(
          path.resolve(__dirname, './fixtures/module.tsx'),
          'LocaleProviderProps'
        ),
        null
      );
    });
    it('should support module', () => {
      assert.notEqual(
        readInterfaceAstByName(
          path.resolve(__dirname, './fixtures/module.tsx'),
          'Locale'
        ),
        null
      );
    });
    it('should get ast when input is correct', () => {
      assert.notEqual(
        readInterfaceAstByName(
          path.resolve(__dirname, './fixtures/fixtures.tsx'),
          'ITestInterface'
        ),
        null
      );
    });
  });

  describe('test parserTsInterfaceDeclaration', () => {
    it('should support exportNamedDeclaration', () => {
      const ast = readInterfaceAstByName(
        path.resolve(__dirname, './fixtures/module.tsx'),
        'LocaleProviderProps'
      );
      const fields = parserTsInterfaceDeclaration(ast);
      assert.deepEqual(fields, localeProviderPropsFieldMeta);
    });

    const data = parserTsInterfaceDeclaration(
      readInterfaceAstByName(
        path.resolve(__dirname, './fixtures/fixtures.tsx'),
        'ITestInterface'
      )
    );
    assert.deepEqual(data.length, 5);

    describe('type should work correct with union type', () => {
      const data = parserTsInterfaceDeclaration(
        readInterfaceAstByName(
          path.resolve(__dirname, './fixtures/fixtures.tsx'),
          'TestUnionType'
        )
      );
      assert.deepEqual(data[0].types, `'one' \\| 'two' \\| 'three'`);
    });
  });

  describe('test getFieldMetaByLanguage', () => {
    it('should work correct when meta is null', () => {
      assert.deepEqual(
        getFieldMetaByLanguage(
          {
            name: 'one',
            types: 'boolean',
            optional: 'true'
          },
          'zh-CN'
        ),
        {
          name: 'one',
          types: 'boolean',
          optional: 'true'
        }
      );
    });

    assert.deepEqual(
      getFieldMetaByLanguage(
        {
          name: 'one',
          types: 'boolean',
          optional: 'true',
          meta: {
            base: {
              baseData: 'baseData',
              description: 'newDescription'
            },
            i18n: {
              ['en-US']: {
                language: 'en-US',
                description: 'english description',
                otherInfo: 'other info'
              },
              ['zh-CN']: {
                language: 'zh-CN',
                description: '中文信息',
                otherInfo: '其他信息'
              }
            }
          }
        },
        'zh-CN'
      ),
      {
        name: 'one',
        optional: 'true',
        types: 'boolean',
        baseData: 'baseData',
        description: '中文信息',
        language: 'zh-CN',
        otherInfo: '其他信息'
      }
    );
  });
});
