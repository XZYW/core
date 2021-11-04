import { Logger } from '../../src/logger';
function sleep(timer: number) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(true), timer);
  });
}

(async () => {
  const logger = new Logger('S-CORE');

  
  await logger.task('test title111111', [
    {
      title: 'Checking git status',
      task: async()=>{
        logger.debug('debug message')
        await sleep(1000)
      },
    },
    {
      title: 'Checking remote history',
      task: async()=>{
        await sleep(1000)
      },
    },
    {
      title: 'Install package dependencies with Yarn',
      task: async()=>{
        await sleep(1000)
      },
    },
  ]);
  
 await logger.task('test title22222', [
    {
      title: 'Checking git status',
      task: async()=>{
        await sleep(1000)
      },
    },
    {
      title: 'Checking remote history',
      task: async()=>{
        await sleep(1000)
        throw new Error('Unclean working tree. Commit or stash changes first.');
      },
    },
    {
      title: 'Install package dependencies with Yarn',
      task: async()=>{
        await sleep(1000)
      },
    },
  ]);
  // console.log(test2, 'test2');
  
  await logger.task('test title33333', [
    {
      title: 'Checking git status',
      task: async()=>{
        await sleep(1000)
      },
    },
    {
      title: 'Checking remote history',
      task: async()=>{
        await sleep(1000)
      },
    },
    {
      title: 'Install package dependencies with Yarn',
      task: async()=>{
        await sleep(1000)
      },
    },
  ]);
})();
