import { FieldInfo, MethodInfo, I18nInfo } from './../interface';
import { TSInterfaceDeclaration } from '@babel/types';

export type InterfaceParser = (
  ast: TSInterfaceDeclaration
) => Array<I18nInfo<FieldInfo> | I18nInfo<MethodInfo>>;

const interfaceParser: InterfaceParser = (_ast: TSInterfaceDeclaration) => {
  return [];
};

export default interfaceParser;
