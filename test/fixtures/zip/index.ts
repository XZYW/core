import * as core from '../../../src';

console.log(core.ignore('./demo', 'fc'));





class ZipDemo {
  async testZip() {
    await core.zip({
      codeUri: './demo',
      include: ['../spinner.ts'],
      exclude: ['a.md'],
      // exclude: ['dir'],
      outputFileName: 'provider',
      // exclude: ['./demo/dir'],
      outputFilePath: './zipdist',
      componentName:'fc'
    });
  }
}

const demo = new ZipDemo();

demo.testZip();

