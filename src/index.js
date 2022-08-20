import { bootstrap } from './bootstrap.js';
import { closeInterface } from '#Lib/promptQuestion.js';

const main = async () => {
  let loop = true;
  while (loop) {
    loop = await bootstrap();
  }
  closeInterface();
};

main();
