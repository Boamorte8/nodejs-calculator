import { promptQuestion } from '#Lib/promptQuestion.js';

(async () => {
  // 1 Capture entry
  const userAnswer = await promptQuestion(
    'Introduce your action or operation:\n'
  );

  // 2 Validate entry
  // 3 Do the operation
  // 4 Display result
  console.log('userAnswer', userAnswer);
  if (userAnswer === 'exit') {
    process.exit(0);
  }
})();
