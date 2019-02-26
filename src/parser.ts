import { IField } from './interface';
import {
  TSInterfaceDeclaration,
  isTSPropertySignature,
  isTSMethodSignature,
  isClassProperty,
  isIdentifier,
  ClassDeclaration,
  TSTypeAnnotation,
  Noop,
  TypeAnnotation
} from '@babel/types';
import generate from '@babel/generator';
import { parserComment, mergeFieldMeta } from './comment';

function generateType(
  typeAnnotation: TSTypeAnnotation | Noop | TypeAnnotation | null
): string {
  if (!typeAnnotation) {
    return '';
  }
  return (generate(typeAnnotation).code as string)
    .slice(2)
    .replace(/\|/g, '\\|')
    .replace(/\n/g, '');
}

export function parseTsInterfaceDeclaration(
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
    const result: IField = {
      optional: optional ? 'true' : 'false',
      name: key.name,
      types: generateType(typeAnnotation)
    };
    if (meta) {
      result.meta = meta;
    }
    return result;
  });
  return result.filter(o => !!o);
}

export function parseClassDeclaration(target: ClassDeclaration): IField[] {
  const result = target.body.body.map(node => {
    if (!isClassProperty(node)) {
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
    const result: IField = {
      optional: optional ? 'true' : 'false',
      name: key.name,
      types: generateType(typeAnnotation)
    };
    if (meta) {
      result.meta = meta;
    }
    return result;
  });
  return result.filter(o => !!o);
}
