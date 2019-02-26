// @ts-ignore
import * as React from 'react';
import { IField } from '../../src/interface';

interface Locale {
  locale: string;
}

export interface LocaleProviderProps {
  /**
   * @language en-US
   * @description language package setting, you can find the packages in [antd/lib/locale-provider](http://unpkg.com/antd/lib/locale-provider/)
   */
  /**
   * @language zh-CN
   * @description 语言包配置，语言包可到 [antd/lib/locale-provider](http://unpkg.com/antd/lib/locale-provider/) 目录下寻找
   */
  locale: Locale;

  /**
   * @types ReactNode
   */
  children?: React.ReactNode;

  noMeta: string;
}

export const localeProviderPropsFieldMeta: IField[] = [
  {
    optional: 'false',
    name: 'locale',
    types: 'Locale',
    meta: {
      base: {},
      i18n: {
        'en-US': {
          language: 'en-US',
          description:
            'language package setting, you can find the packages in [antd/lib/locale-provider](http://unpkg.com/antd/lib/locale-provider/)'
        },
        'zh-CN': {
          language: 'zh-CN',
          description:
            '语言包配置，语言包可到 [antd/lib/locale-provider](http://unpkg.com/antd/lib/locale-provider/) 目录下寻找'
        }
      }
    }
  },
  {
    optional: 'true',
    name: 'children',
    types: 'React.ReactNode',
    meta: {
      base: {
        types: 'ReactNode'
      },
      i18n: {}
    }
  },
  {
    name: 'noMeta',
    optional: 'false',
    types: 'string'
  }
];

export const localeProviderPropsBaseMeta = [
  {
    name: 'locale',
    optional: 'false',
    types: 'Locale'
  },
  { name: 'children', optional: 'true', types: 'ReactNode' },
  { name: 'noMeta', optional: 'false', types: 'string' }
];

export const localeProviderPropsChineseMeta = [
  {
    name: 'locale',
    optional: 'false',
    types: 'Locale',
    language: 'zh-CN',
    description:
      '语言包配置，语言包可到 [antd/lib/locale-provider](http://unpkg.com/antd/lib/locale-provider/) 目录下寻找'
  },
  { name: 'children', optional: 'true', types: 'ReactNode' },
  { name: 'noMeta', optional: 'false', types: 'string' }
];
export default class TestSupportClassProperties {
  static propTypes = {
    name: 'name'
  };
}
