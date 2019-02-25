import { IFieldMeta } from '../src/interface';
import { parserComment, mergeFieldMeta } from '../src/comment';
import assert = require('power-assert');

/**
 * @language en-US
 * @description disabled state of button
 * @empty
 */
describe('test comment.ts', () => {
  describe('test parserComment', () => {
    const comment =
      '/**\n* @language   en-US  \n* @description  disabled state of button   \n* @empty \n*';
    const result = parserComment(comment);

    it('should trim when parser', () => {
      assert.deepEqual(result.language, 'en-US');
      assert.deepEqual(result.description, 'disabled state of button');
    });
    it('should ignore empty value', () => {
      assert.deepEqual(result.empty, undefined);
    });
  });

  describe('test mergeFieldMeta', () => {
    const baseMeta = {
      baseData: 'baseData',
      description: 'baseDescription'
    };
    const chineseMeta = {
      language: 'zh-CN',
      description: '中文信息',
      otherInfo: '其他信息'
    };
    const englishMeta = {
      language: 'en-US',
      description: 'english description',
      otherInfo: 'other info'
    };
    const newMeta = {
      description: 'newDescription'
    };

    it('should return default meta then metaList is null', () => {
      const expectResult: IFieldMeta = {
        base: {},
        i18n: {}
      };
      assert.deepEqual(mergeFieldMeta(undefined), expectResult);
      assert.deepEqual(mergeFieldMeta(null), expectResult);
      assert.deepEqual(mergeFieldMeta([]), expectResult);
    });

    it('should work correct', () => {
      const expectResult: IFieldMeta = {
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
      };
      assert.deepEqual(
        mergeFieldMeta([baseMeta, chineseMeta, englishMeta, newMeta]),
        expectResult
      );
    });
  });
});
