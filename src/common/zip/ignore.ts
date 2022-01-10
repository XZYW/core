import fs from 'fs-extra';
import path from 'path';

function ignore(codeUri: string, componentName?: string) {
  let signorePath: string;
  if (fs.existsSync(path.join(codeUri, '.signore'))) {
    signorePath = path.join(codeUri, '.signore');
  } else {
    const { templateFile } = process.env;
    signorePath = fs.existsSync(templateFile)
      ? path.join(path.dirname(templateFile), '.signore')
      : path.join(process.cwd(), '.signore');
  }
  if (!fs.existsSync(signorePath)) return;
  const res = formatSignoreContent(fs.readFileSync(signorePath, 'utf-8'));
  const result = componentName ? [].concat(res._common).concat(res[componentName]) : res._common;
  return result ? result.filter((item) => Boolean(item)) : undefined;
}

function formatSignoreContent(value: string) {
  let opt = value.split('\n');
  opt = opt.filter((item) => Boolean(item));
  let start = 0;
  for (const index in opt) {
    if (opt[index].startsWith('#')) {
      start = Number(index);
      break;
    }
  }
  let list = [].concat(opt);

  const obj: any = {};
  if (start !== 0) {
    list = opt.slice(start);
    obj._common = opt.slice(0, start);
  }
  let index = 0;
  let key: string;
  do {
    if (list[index].startsWith('#')) {
      key = list[index]
        .replace(/#/g, '')
        .replace(/devsapp\//, '')
        .trim();
      obj[key] = [];
    } else {
      obj[key].push(list[index]);
    }
    index++;
  } while (index < list.length);

  return obj;
}

export default ignore;
