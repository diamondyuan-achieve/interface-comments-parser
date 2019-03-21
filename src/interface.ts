import { MethodInfo } from './interface';
export interface IField {
  /**
   * @language en-US
   * @description name of fields
   */
  /**
   * @language zh-CN
   * @description 字段名
   */
  name: string;

  /**
   * @language zh-CN
   * @description 字段是否可选(即有没有问号)
   */
  optional: string;

  /**
   * @language zh-CN
   * @description 字段类型
   */
  types: string;

  /**
   * @language zh-CN
   * @description 字段信息，用户备注。
   */
  meta?: IFieldMeta;
}

export interface IMeta {
  [key: string]: string;
}

export interface IFieldMeta {
  base: IMeta;
  i18n: {
    [language: string]: IMeta;
  };
}

export interface FieldInfo {
  /**
   * 是否过期
   */
  deprecated: boolean;
  /**
   * 字段名称
   */
  name: string;
  /**
   * 是否必填
   */
  required: boolean;
  /**
   * 类型
   */
  type: string;
  /**
   * 第一次出现的版本号
   */
  since?: string;
  /**
   * 默认类型
   */
  default?: string;
  /**
   * 概要
   */
  summary?: string;
  /**
   * 详细说明
   */
  remarks?: string;
  /**
   * 引用
   */
  see?: string;
}

export interface MethodInfo {
  /**
   * 是否过期
   */
  deprecated: boolean;
  /**
   * 字段名称
   */
  name: string;
  /**
   * 是否必填
   */
  required: boolean;
  /**
   * 类型
   */
  type: string;
  /**
   * 第一次出现的版本号
   */
  since?: string;
  /**
   * 概要
   */
  summary?: string;
  /**
   * 详细说明
   */
  remarks?: string;
  /**
   * 引用
   */
  see?: string;
  /**
   * 参数列表
   */
  param: {
    name: string;
    description: string;
  }[];
  /**
   * 返回结果
   */
  return: string;
}
