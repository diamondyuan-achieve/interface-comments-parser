type AnchorContainer = HTMLElement | Window;
import { IField } from '../../src/interface';

// @ts-ignore
interface ITestInterface {
  /**
   * @default `false`
   */
  /**
   * @language en-US
   * @description disabled state of button
   */
  /**
   * @language zh-CN
   * @description 按钮失效状态
   */
  disabled?: boolean;
  /**
   * @default `button`
   */
  /**
   * @language en-US
   * @description set the original html `type` of `button`, see: [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type)
   */
  /**
   * @language zh-CN
   * @description 设置 `button` 原生的 `type` 值，可选值请参考 [HTML 标准](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type)
   */
  htmlType?: string;

  /**
   * @default `false`
   */
  /**
   * @language en-US
   * @description set the loading status of button
   */
  /**
   * @language zh-CN
   * @description 设置按钮载入状态
   */
  loading?: boolean | { delay: number };
  /**
   * @language en-US
   * @description date
   */
  /**
   * @language zh-CN
   * @description 日期
   */
  value?: 'one' | 'two' | 'three';

  getContainer?: () => AnchorContainer;

  /**
   * Indexable Types @see http://www.typescriptlang.org/docs/handbook/interfaces.html
   */
  [propName: string]: any;

  /**
   * Function Types @see http://www.typescriptlang.org/docs/handbook/interfaces.html
   */
  (source: string, subString: string): boolean;

  1: () => void;
}

export const iTestInterfaceFieldMeta: IField[] = [
  {
    optional: 'true',
    name: 'disabled',
    types: 'boolean',
    meta: {
      base: { default: '`false`' },
      i18n: {
        'en-US': { language: 'en-US', description: 'disabled state of button' },
        'zh-CN': { language: 'zh-CN', description: '按钮失效状态' }
      }
    }
  },
  {
    optional: 'true',
    name: 'htmlType',
    types: 'string',
    meta: {
      base: { default: '`button`' },
      i18n: {
        'en-US': {
          language: 'en-US',
          description:
            'set the original html `type` of `button`, see: [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type)'
        },
        'zh-CN': {
          language: 'zh-CN',
          description:
            '设置 `button` 原生的 `type` 值，可选值请参考 [HTML 标准](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type)'
        }
      }
    }
  },
  {
    optional: 'true',
    name: 'loading',
    types: 'boolean \\| {  delay: number;}',
    meta: {
      base: { default: '`false`' },
      i18n: {
        'en-US': {
          language: 'en-US',
          description: 'set the loading status of button'
        },
        'zh-CN': { language: 'zh-CN', description: '设置按钮载入状态' }
      }
    }
  },
  {
    optional: 'true',
    name: 'value',
    types: '\'one\' \\| \'two\' \\| \'three\'',
    meta: {
      base: {},
      i18n: {
        'en-US': { language: 'en-US', description: 'date' },
        'zh-CN': { language: 'zh-CN', description: '日期' }
      }
    }
  },
  { optional: 'true', name: 'getContainer', types: '() => AnchorContainer' }
];
