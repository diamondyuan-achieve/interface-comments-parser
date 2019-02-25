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
