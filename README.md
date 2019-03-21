# interface-comments-parser

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]

[npm-image]: https://img.shields.io/npm/v/interface-comments-parser.svg?style=flat-square
[npm-url]: https://npmjs.org/package/interface-comments-parser
[travis-image]: https://img.shields.io/travis/DiamondYuan/interface-comments-parser.svg?style=flat-square
[travis-url]: https://travis-ci.org/DiamondYuan/interface-comments-parser
[codecov-image]: https://codecov.io/gh/DiamondYuan/interface-comments-parser/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/DiamondYuan/interface-comments-parser

```bash
npm i --save interface-comments-parser
```

## Warning

This is an initial draft, API is not stable

## Usage

### Parse

You can use `parse` to parse file.

```js
const path = require("path");
const { parse } = require("interface-comments-parser");

parse(path.resolve(__dirname, "./demo.ts"), "Demo");
```

### GetFieldMeta

```js
const path = require("path");
const { parse, getFieldMeta } = require("interface-comments-parser");

const result = parse(path.resolve(__dirname, "./demo.ts"), "Demo");
const meta = result.map(o => getFieldMeta(o, "zh-CN"));
```

## Type

```typescript
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
```

## API

### parse(filePath: string, name: string): IField[];

### getFieldMeta(field: IField, language?: string): IMeta;
