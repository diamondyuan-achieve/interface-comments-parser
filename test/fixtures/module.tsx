// @ts-ignore
import * as React from 'react';
// @ts-ignore
import { ModalLocale } from '../modal/locale';
import { IField } from '../../src/interface';

interface Locale {
  locale: string;
  Pagination?: Object;
  DatePicker?: Object;
  TimePicker?: Object;
  Calendar?: Object;
  Table?: Object;
  Modal?: ModalLocale;
  Popconfirm?: Object;
  Transfer?: Object;
  Select?: Object;
  Upload?: Object;
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
  children?: React.ReactNode;
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
    meta: undefined
  }
];

export default class TestSupportClassProperties {
  static propTypes = {
    name: 'name'
  };
}
