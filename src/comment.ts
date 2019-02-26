import { IMeta, IFieldMeta } from './interface';

export function mergeFieldMeta(metaList: IMeta[]): IFieldMeta {
  const result: IFieldMeta = {
    base: {},
    i18n: {}
  };
  for (const meta of metaList) {
    const { language } = meta;
    if (language) {
      result.i18n[language] = Object.assign({}, result.i18n[language], meta);
    } else {
      result.base = Object.assign({}, result.base, meta);
    }
  }
  return result;
}

export function parserComment(comment: string): IMeta {
  const lines = comment.match(/@[a-z]* .*/g);
  const result: IMeta = {};
  for (const line of lines) {
    const data = line.match(/@([a-z]*) (.*)/);
    if (data && data[2]) {
      result[data[1]] = data[2].trim();
    }
  }
  return result;
}
