import { IField } from './interface';
import {
  TSInterfaceDeclaration,
  isTSPropertySignature,
  isTSMethodSignature,
  isIdentifier
} from '@babel/types';
import generate from '@babel/generator';
import { parserComment, mergeFieldMeta } from './comment';

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
    const result: IField = {
      optional: optional ? 'true' : 'false',
      name: key.name,
      types: (generate(typeAnnotation).code as string)
        .slice(2)
        .replace(/\|/g, '\\|')
        .replace(/\n/g, '')
    };
    if (meta) {
      result.meta = meta;
    }
    return result;
  });
  return result.filter(o => !!o);
}
