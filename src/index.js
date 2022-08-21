import { bootstrap } from './bootstrap.js';
import { closeInterface } from '#Lib/promptQuestion.js';

const main = async () => {
  let stopLoop = false;
  while (!stopLoop) {
    stopLoop = await bootstrap();
  }
  closeInterface();
};

main();
