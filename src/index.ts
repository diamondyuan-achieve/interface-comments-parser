import { IField, IMeta } from './interface';
import { parse } from '@babel/parser';
import {
  isTSInterfaceDeclaration,
  TSInterfaceDeclaration,
  isTSPropertySignature,
  isTSMethodSignature,
  isIdentifier,
  isExportNamedDeclaration
} from '@babel/types';
import * as fs from 'fs';
import generate from '@babel/generator';
import { parserComment, mergeFieldMeta } from './comment';

export function readInterfaceAstByName(
  filePath: string,
  name: string
): TSInterfaceDeclaration | null {
  if (!fs.existsSync(filePath)) {
    return null;
  }
  const ast = parse(fs.readFileSync(filePath).toString(), {
    sourceType: 'module',
    plugins: ['typescript', 'classProperties']
  });
  for (let node of ast.program.body) {
    if (isExportNamedDeclaration(node)) {
      node = node.declaration;
    }
    if (isTSInterfaceDeclaration(node) && node.id.name === name) {
      return node;
    }
  }
  return null;
}

export function parserTsInterfaceDeclaration(
  targetInterface: TSInterfaceDeclaration
): IField[] {
  const result = targetInterface.body.body.map(node => {
    if (!(isTSPropertySignature(node) || isTSMethodSignature(node))) {
      return null;
    }
    const { optional, key, typeAnnotation, leadingComments } = node;
    if (!isIdentifier(key)) {
      return null;
    }

    let meta;
    if (Array.isArray(leadingComments) && leadingComments.length > 0) {
      meta = mergeFieldMeta(leadingComments.map(o => parserComment(o.value)));
    }
    return {
      optional: optional ? 'true' : 'false',
      name: key.name,
      types: (generate(typeAnnotation).code as string)
        .slice(2)
        .replace(/\|/g, '\\|')
        .replace(/\n/g, ''),
      meta
    };
  });
  return result.filter(o => !!o);
}

export function getFieldMetaByLanguage(field: IField, language: string): IMeta {
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
