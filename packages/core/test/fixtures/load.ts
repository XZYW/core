import { loadApplication } from '../../src/common';

async function test() {
  // const fc = await loadComponent('/Users/shihuali/learn/fc-atom/fc-ram-alibaba-component');
  // const fc = await loadApplication(
  //   'alibaba/fc@0.0.7',
  //   'https://tool.serverlessfans.com/api',
  //   // '../',
  //   '/Users/shihuali/workspace/s-core/packages/core',
  // );
  // const fc = await loadComponent('Serverless-Devs-Awesome/express-alibaba-component');
  // const fc = await loadApplication('Serverless-Devs/Serverless-Devs');
  // const fc = await loadComponent('Serverless-Devs-Awesome/express-alibaba-component','https://api.github.com/repos')

  const fc = await loadApplication('vue', 'https://download.registry.serverlessfans.cn/init/alibaba-node.js12-http');

  // const fc = await loadComponent('alibaba/fc-deploy');
  console.log(fc);
}

test();

