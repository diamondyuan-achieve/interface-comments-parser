import { IField, IMeta } from './interface';
import * as babelParser from '@babel/parser';
import {
  isTSInterfaceDeclaration,
  isExportNamedDeclaration
} from '@babel/types';
import * as fs from 'fs';
import { parserTsInterfaceDeclaration } from './parser';

export function parse(filePath: string, name: string): IField[] {
  const ast = babelParser.parse(fs.readFileSync(filePath).toString(), {
    sourceType: 'module',
    plugins: ['typescript', 'classProperties']
  });
  for (let node of ast.program.body) {
    if (isExportNamedDeclaration(node)) {
      node = node.declaration;
    }
    if (isTSInterfaceDeclaration(node) && node.id.name === name) {
      return parserTsInterfaceDeclaration(node);
    }
  }
  return null;
}

export function getFieldMeta(field: IField, language?: string): IMeta {
  const { meta, name, optional, types } = field;
  const baseInfo = {
    name,
    optional,
    types
  };
  if (!meta) {
    return baseInfo;
  }
  return Object.assign(baseInfo, meta.base, meta.i18n[language]);
}
