import { MethodInfo, FieldInfo } from './interface';
import * as babelParser from '@babel/parser';
import {
  isTSInterfaceDeclaration,
  isExportNamedDeclaration,
  isClassDeclaration
} from '@babel/types';

import { interfaceParser } from './parser';

export function parse(
  code: string,
  name: string,
  _locale?: string
): Array<FieldInfo | MethodInfo> | null {
  const ast = babelParser.parse(code, {
    sourceType: 'module',
    plugins: ['typescript', 'classProperties']
  });
  for (let node of ast.program.body) {
    if (isExportNamedDeclaration(node)) {
      node = node.declaration;
    }
    if (isTSInterfaceDeclaration(node) && node.id.name === name) {
      let _result = interfaceParser(node);
      return _result.map(o => o.base);
    }
    if (isClassDeclaration(node) && node.id.name === name) {
      // todo
    }
  }
  return null;
}
