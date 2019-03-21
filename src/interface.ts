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

export interface ParamInfo {
  name: string;
  required: boolean;
  description: string;
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
  params: ParamInfo[];
  /**
   * 返回结果
   */
  return: string;
}
